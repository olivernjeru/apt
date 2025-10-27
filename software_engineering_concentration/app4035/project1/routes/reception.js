const express = require('express');
const fs = require('fs');
const router = express.Router();
const { requireLogin } = require('../middlewares/authMiddleware');

//(nIKKS TasK)
const path = require('path');

const filePath = path.join(__dirname, '..', 'database/rooms.json');

const roomDetails = JSON.parse(fs.readFileSync(filePath, 'utf8'));



// GET /reception/rooms – Rooms dashboard
router.get('/rooms', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'receptionist') {
        return res.status(403).send('Access denied');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading rooms.json:", err);
            return res.status(500).send('Error loading room data');
        }

        const updatedRoomDetails = JSON.parse(data);

        res.render('reception/rooms', {
            title: "Rooms",
            layout: 'dashboard_layout',
            activeRoute: 'rooms',
            roomDetails: updatedRoomDetails, // Use latest data
            user: req.session.user
        });
    });
});



// GET /reception/checkins – Check-ins page
router.get('/checkins', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'receptionist') {
        return res.status(403).send('Access denied');
    }
    res.render('reception/checkins', {
        title: "Check-Ins",
        layout: 'dashboard_layout',
        activeRoute: 'checkins',
        user: req.session.user,
        room: req.query.room || ""
    });
});

// GET /reception/checkouts – Check-out page
router.get("/checkouts", (req, res) => {
    const roomNumber = req.query.room || req.params.room;



    fs.readFile(checkinDataPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading checkinData.json:", err);
            return res.status(500).send("Internal Server Error");
        }

        
        if (!data) return res.status(404).send("Check-in data is empty");

        let checkins = JSON.parse(data);    
        const guest = checkins.find(g => String(g.roomNo).trim() === String(roomNumber).trim());

        if (!guest) {
            return res.status(404).send("No guest found for this room.");
        }


        // Render the checkout form and pass the guest details
        res.render("reception/checkouts", {
            title: "Check-out",
        layout: 'dashboard_layout',
        activeRoute: 'checkouts',
        guest,
        user: req.session.user,
        room: req.query.room || ""
         });
    });
});

const archivesPath = path.join(__dirname, '..', 'database/archives.json');

router.post('/checkouts', (req, res) => {
    const { roomNo } = req.body;


    if (!roomNo) {
        return res.status(400).json({ message: "Room number is required" });
    }

// Read and update room status in rooms.json
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading rooms file" });
        }


        let rooms = JSON.parse(data);
        const roomIndex = rooms.findIndex(room => String(room.roomNumber).trim() === String(roomNo).trim());

        if (roomIndex === -1) {
            return res.status(404).json({ message: `Room ${roomNo} not found in rooms.json `});
        }
        


        if (roomIndex === -1) {
            console.error(`Room not found: ${roomNo}`);
            return res.status(404).json({ message: "Room not found" });
        }


        // Update room status
        rooms[roomIndex].cleaningStatus = "Pending";
        rooms[roomIndex].roomStatus = "Unavailable";//code thatssss bringing last issue

        //Save update room data
        fs.writeFile(roomsDataPath , JSON.stringify(rooms, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error updating room data" });
            }

            // Update checkinData.json and Archives.json
            fs.readFile(checkinDataPath, 'utf8', (err, checkinData) => {
                if (err) {
                    console.error("Error reading checkinData.json:", err);
                    return res.status(500).json({ message: "Error reading check-in data" });
                }

                let checkins = JSON.parse(checkinData);
                const guestIndex = checkins.findIndex(guest => String(guest.roomNo).trim() === String(roomNo).trim());

                if (guestIndex === -1) {
                    console.error(`Guest not found for room: ${roomNo}`);
                    return res.status(404).json({ message: "Guest not found for this room" });
                }

                const guest = checkins[guestIndex];  // Get guest details without removing

                // Append guest details to Archives.json first
                fs.readFile(archivesPath, 'utf8', (err, archiveData) => {
                    let archives = [];

                    if (err) {
                        if (err.code === 'ENOENT') {
                            console.log("Archives.json not found, creating a new one.");
                            fs.writeFileSync(archivesPath, '[]');
                        } else {
                            console.error("Error reading Archives.json:", err);
                            return res.status(500).json({ message: "Error reading archives data" });
                        }
                    } else {
                        try {
                            archives = JSON.parse(archiveData);
                        } catch (parseErr) {
                            console.error("Error parsing Archives.json:", parseErr);
                            return res.status(500).json({ message: "Error parsing archives data" });
                            archives = [];
                        }
                    }

                    if (!Array.isArray(archives)) {
                        console.warn("Archives.json content is not an array. Replacing with empty array.");
                        archives = [];
                    }

                    archives.push(guest);

                    // Save the updated Archives.json
                    fs.writeFile(archivesPath, JSON.stringify(archives, null, 2), (err) => {
                        if (err) {
                            console.error("Error updating Archives.json:", err);
                            return res.status(500).json({ message: "Error archiving guest data" });
                        }

                        console.log(`Guest for room ${roomNo} archived successfully.`);

                        // Remove guest from checkinData.json after saving to archives
                        checkins.splice(guestIndex, 1);

                        // Save the updated checkinData.json
                        fs.writeFile(checkinDataPath, JSON.stringify(checkins, null, 2), (err) => {
                            if (err) {
                                console.error("Error updating checkinData.json:", err);
                                return res.status(500).json({ message: "Error updating check-in data" });
                            }

                            console.log(`Guest for room ${roomNo} removed from checkinData.json.`);
                            res.json({ message: "Checkout successful", updatedRoom: rooms[roomIndex] });
                        });
                    });
                });
            });
        });
    });
});


// Fix incorrect file path handling
const checkinDataPath = path.join(__dirname, '..', 'database', 'checkinData.json');
const roomsDataPath = path.join(__dirname, '..', 'database', 'rooms.json'); // Rooms file path

router.post('/checkins', requireLogin, (req, res) => {
    if (req.session.user.role !== 'receptionist') {
        return res.status(403).send('Access denied');
    }

    const formatDate = (dateString) => {
        if (!dateString) return null; // Handle missing dates
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return null; // Handle invalid dates
        return date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
    };

    const clientData = {
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        roomNo: req.body.roomNo,
        checkin: formatDate(req.body.checkin),
        checkout: formatDate(req.body.checkout)
    };

    fs.readFile(checkinDataPath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.render('reception/checkins', {
                title: "Check-Ins",
                layout: 'dashboard_layout',
                activeRoute: 'checkins',
                user: req.session.user,
                errorMessage: 'Error reading check-in file'
            });
        }

        const existingData = data ? JSON.parse(data) : [];
        existingData.push(clientData);

        fs.writeFile(checkinDataPath, JSON.stringify(existingData, null, 2), (err) => {
            if (err) {
                return res.render('reception/checkins', {
                    title: "Check-Ins",
                    layout: 'dashboard_layout',
                    activeRoute: 'checkins',
                    user: req.session.user,
                    errorMessage: 'Error saving check-in data'
                });
            }

            // Update room status in rooms.json
            fs.readFile(roomsDataPath, 'utf8', (err, roomData) => {
                if (err) {
                    return res.render('reception/checkins', {
                        title: "Check-Ins",
                        layout: 'dashboard_layout',
                        activeRoute: 'checkins',
                        user: req.session.user,
                        errorMessage: 'Error reading room data'
                    });
                }

                let rooms = JSON.parse(roomData);
                let room = rooms.find(r => String(r.roomNumber) === String(clientData.roomNo));

                if (room) {
                    room.roomStatus = "Occupied"; // Update status

                    fs.writeFile(roomsDataPath, JSON.stringify(rooms, null, 2), (err) => {
                        if (err) {
                            return res.render('reception/checkins', {
                                title: "Check-Ins",
                                layout: 'dashboard_layout',
                                activeRoute: 'checkins',
                                user: req.session.user,
                                errorMessage: 'Error updating room status'
                            });
                        }

                        res.send('<script>alert("Check-in successful!"); window.location.href="/reception/rooms";</script>');
                    });
                } 
            });
        });
    });
});



// GET /reception/housekeeping - housekeeping information on the reception dashboard
router.get("/housekeeping", (req, res) => {
    if (!req.session.user || req.session.user.role !== 'receptionist') {
        return res.status(403).send('Access denied');
    }

    // Read the file fresh on every request
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading rooms.json:", err);
            return res.status(500).send("Error reading room data.");
        }

        let rooms;
        try {
            rooms = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing rooms.json:", parseErr);
            return res.status(500).send("Error parsing room data.");
        }

        console.log("Rooms data:", rooms); // Debugging line to check the output

        if (!rooms || !Array.isArray(rooms) || rooms.length === 0) {
            console.log("No rooms found or data is not an array.");
            return res.status(500).send("Error: No room data available.");
        }

        const filteredRooms = rooms.map(({ roomNumber, cleaningStatus }) => ({ roomNumber, cleaningStatus }));

        res.render('reception/housekeeping', {
            title: "Housekeeping",
            layout: 'dashboard_layout',
            rooms: filteredRooms,
            activeRoute: 'housekeeping',
            user: req.session.user
        });
    });
});


// submitting Cleaning request
router.post('/housekeeping', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ success: false, error: "Error reading file." });

        let rooms = JSON.parse(data);
        
        req.body.rooms.forEach(roomNumber => {
            let room = rooms.find(r => r.roomNumber == roomNumber); 
            if (room) {
                room.cleaningStatus = "Needs Cleaning"; // Update status
            }
        });

        fs.writeFile(filePath, JSON.stringify(rooms, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Error saving file" });
            }
            res.json({ success: true, message: "Cleaning status updated successfully!" });
        });
    });
});


module.exports = router;
