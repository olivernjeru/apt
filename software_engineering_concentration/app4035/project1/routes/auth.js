const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { loadUsers, saveUsers } = require('../utils/userUtils');
const { requireAdmin } = require('../middlewares/authMiddleware');

// Landing page: redirect based on role or render home page
router.get('/', (req, res) => {
    if (req.session.user) {
        const role = req.session.user.role;
        if (role === 'admin') return res.redirect('/admin');
        if (role === 'receptionist') return res.redirect('/reception/rooms');
        if (role === 'housekeeping') return res.redirect('/housekeeping');
    }
    res.render('home');
});

// GET /login
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// POST /login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const users = loadUsers();
    const user = users.find(u => u.username === email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render('login', { error: 'Invalid credentials' });
    }
    req.session.user = { username: user.username, role: user.role };
    // Redirect based on role
    if (user.role === 'admin') return res.redirect('/admin');
    if (user.role === 'receptionist') return res.redirect('/reception/rooms');
    if (user.role === 'housekeeping') return res.redirect('/housekeeping');
});

// GET /register - restricted to admin
router.get('/register', requireAdmin, (req, res) => {
    res.render('registerUser', { error: null });
});

// POST /register - restricted to admin
router.post('/register', requireAdmin, (req, res) => {
    const { email, password, password2, role } = req.body;
    if (password !== password2) {
        return res.render('admin/registerUser', {
            error: 'Passwords do not match',
            user: req.session.user,
            activeRoute: 'register',
            title: "Register User",
            layout: 'dashboard_layout'
        });
    }
    if (role !== 'receptionist' && role !== 'housekeeping') {
        return res.render('admin/registerUser', {
            error: 'Invalid role selected',
            user: req.session.user,
            activeRoute: 'register',
            title: "Register User",
            layout: 'dashboard_layout'
        });
    }
    const users = loadUsers();
    if (users.find(u => u.username === email)) {
        return res.render('admin/registerUser', {
            error: 'User already exists',
            user: req.session.user,
            activeRoute: 'register',
            title: "Register User",
            layout: 'dashboard_layout'
        });
    }
    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { username: email, password: hashedPassword, role };
    users.push(newUser);
    saveUsers(users);
    res.redirect('/admin');
});

// GET /logout
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/login');
    });
});

module.exports = router;
