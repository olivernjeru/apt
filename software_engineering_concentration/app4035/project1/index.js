const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

// Import route modules
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const receptionRoutes = require('./routes/reception');
const housekeepingRoutes = require('./routes/housekeeping');

// Set up Handlebars with custom helpers and layouts
app.set('views', 'views');
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: path.join(__dirname, 'views/layouts'),
    helpers: {
        eq: (a, b) => a === b,
        removeDomain: function (email) {
            const username = email.split('@')[0];
            return username.charAt(0).toUpperCase() + username.slice(1);
        }
    }
}));

app.set('view engine', 'hbs');

// Serve static files from the public folder
app.use(express.static('public'));

// Parse JSON and URL-encoded data
app.use(express.json());  // This fixes the `undefined` issue for JSON requests
app.use(express.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
    secret: 'GUEJ3#RGJfj3ijf3ie493jdwfjei',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true, // Prevents JavaScript access to cookies
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict' // Prevents cross-site request forgery
    }
}));

//Parse json requests
app.use(express.json());

// Use the modular routes
app.use('/', authRoutes); // Authentication & landing routes
app.use('/admin', adminRoutes); // Admin routes
app.use('/reception', receptionRoutes); // Receptionist routes
app.use('/housekeeping', housekeepingRoutes); // Housekeeping routes

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
