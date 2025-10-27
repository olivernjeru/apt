const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '..', 'database/users.json');

function loadUsers() {
    try {
        const data = fs.readFileSync(usersFile);
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users file:', err);
        return [];
    }
}

function saveUsers(users) {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('Error writing users file:', err);
    }
}

module.exports = { loadUsers, saveUsers };
