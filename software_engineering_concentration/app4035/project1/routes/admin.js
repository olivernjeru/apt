const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { loadUsers, saveUsers } = require('../utils/userUtils');
const { requireLogin, requireAdmin } = require('../middlewares/authMiddleware');

// GET /admin – Admin dashboard (Register Users default view)
router.get('/', requireLogin, (req, res) => {
    if (req.session.user.role !== 'admin') {
        return res.status(403).send('Access denied');
    }
    const users = loadUsers();
    res.render('admin/registerUser', {
        title: "Admin Dashboard",
        users,
        user: req.session.user,
        activeRoute: 'register',
        layout: 'dashboard_layout'
    });
});

// GET /admin/users – Admin dashboard (User List view)
router.get('/users', requireLogin, requireAdmin, (req, res) => {
    let users = loadUsers();
    // Filter out admin users from the list
    users = users.filter(u => u.role !== 'admin');
    res.render('admin/usersList', {
        title: "Users List",
        users,
        user: req.session.user,
        activeRoute: 'users',
        layout: 'dashboard_layout'
    });
});

// GET /admin/register-user – Render the register user (register) view in the dashboard
router.get('/register-user', requireLogin, requireAdmin, (req, res) => {
    res.render('admin/registerUser', {
        title: "Register User",
        user: req.session.user,
        activeRoute: 'register',
        layout: 'dashboard_layout'
    });
});

// GET /admin/edit-user – Render the edit user form
router.get('/edit-user', requireLogin, requireAdmin, (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.status(400).send('Username is required.');
    }
    const users = loadUsers();
    const userToEdit = users.find(u => u.username === username);
    if (!userToEdit) {
        return res.status(404).send('User not found.');
    }
    res.render('admin/editUser', {
        title: "Edit User",
        user: req.session.user,         // The currently logged in admin
        activeRoute: 'users',
        userToEdit,                    // Data for the user to be edited
        layout: 'dashboard_layout'
    });
});

// POST /admin/edit-user – Process the edit user form with hashed password because we are advanced SWE like that
router.post('/edit-user', requireLogin, requireAdmin, (req, res) => {
    const { originalEmail, email, password, password2, role } = req.body;
    if (password !== password2) {
        return res.render('admin/editUser', {
            title: "Edit User",
            user: req.session.user,
            error: 'Passwords do not match.',
            userToEdit: { username: email, role },
            layout: 'dashboard_layout'
        });
    }
    const users = loadUsers();
    const userIndex = users.findIndex(u => u.username === originalEmail);
    if (userIndex === -1) {
        return res.status(404).send('User not found.');
    }
    if (email !== originalEmail && users.find(u => u.username === email)) {
        return res.render('admin/editUser', {
            title: "Edit User",
            user: req.session.user,
            error: 'Email already exists.',
            userToEdit: { username: email, role },
            layout: 'dashboard_layout'
        });
    }
    // Hash the new password before updating
    const hashedPassword = bcrypt.hashSync(password, 10);
    users[userIndex].username = email;
    users[userIndex].password = hashedPassword;
    users[userIndex].role = role;
    saveUsers(users);
    res.redirect('/admin/users');
});

// POST /admin/delete-user – Delete a user (admin only)
router.post('/delete-user', requireAdmin, (req, res) => {
    const { username } = req.body;
    let users = loadUsers();
    if (username === req.session.user.username) {
        return res.status(400).send("You cannot delete your own account");
    }
    users = users.filter(u => u.username !== username);
    saveUsers(users);
    res.redirect('/admin/users');
});

module.exports = router;
