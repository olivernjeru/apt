const express = require('express');
const path = require('path');
const fsPromises = require('fs').promises;
const router = express.Router();
const { requireLogin } = require('../middlewares/authMiddleware');
const logger = require('../utils/logger');
const lockfile = require('proper-lockfile');

// Function to read JSON files
const readJSON = async (filename) => {
    const filePath = path.join(__dirname, '..', filename);
    try {
        const data = await fsPromises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        logger.error(`Failed to read ${filename}: ${error.message}`);
        throw new Error(`Could not load ${filename}`);
    }
};

// GET /housekeeping – Housekeeping dashboard
router.get('/', requireLogin, async (req, res) => {
    try {
        if (req.session.user.role !== 'housekeeping') {
            logger.warn(`Unauthorized access attempt by ${req.session.user.username}`);
            return res.status(403).send('Access denied');
        }
        const rooms = await readJSON('database/rooms.json');
        const cleaners = await readJSON('database/cleaners.json');
        res.render('housekeeping/housekeeping', {
            title: "Housekeeping Dashboard",
            activeRoute: 'housekeeping',
            layout: 'dashboard_layout',
            user: req.session.user,
            rooms,
            cleaners
        });
    } catch (error) {
        logger.error(`Error loading dashboard: ${error.message}`);
        return res.status(500).send('Failed to load dashboard');
    }
});

const writeJSONWithLock = async (filename, data) => {
    const filePath = path.join(__dirname, '..', filename);
    const release = await lockfile.lock(filePath, {
        retries: {
            retries: 5,
            factor: 2,
            minTimeout: 100,
            maxTimeout: 1000
        }
    });
    try {
        await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2));
    } finally {
        await release();  // Always release the lock
    }
};

// Batch update endpoint now with file-locking to prevent concurrent writes that can lead to the corruption of a .json file
router.post('/update-rooms', async (req, res) => {
    try {
        const { rooms: updatedRooms } = req.body;

        // Validate request body
        if (!Array.isArray(updatedRooms)) {
            logger.warn(`Invalid rooms data received: ${JSON.stringify(req.body)}`);
            return res.status(400).json({ success: false, message: "Invalid rooms data format" });
        }

        let rooms = await readJSON('database/rooms.json');  // Reload fresh data

        updatedRooms.forEach(update => {
            const room = rooms.find(r => r.roomNumber === update.roomNumber);
            if (!room || room.cleaningStatus === "Pending") return;  // skip Pending rooms
        
            logger.debug(`Updating room ${room.roomNumber}: ${JSON.stringify(update)}`);
        
            room.cleaningStatus = update.cleaningStatus;
            
            // Update room status only if it's not Pending
            if (room.cleaningStatus === "Cleaned") {
                room.roomStatus = "Available";
            } else {
                room.roomStatus = "Occupied";
            }
        
            room.assignedCleaner = update.cleaner;
        });
        
        await writeJSONWithLock('database/rooms.json', rooms);  // Safe write with lock
        return res.json({ success: true });
    } catch (error) {
        logger.error(`Error updating rooms: ${error.message}`);  // Logging error
        return res.status(500).json({ success: false, message: `Server error: ${error.message}` });
    }
});

module.exports = router;
