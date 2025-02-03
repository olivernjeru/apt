const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.render('home');
});
app.get('/apt', function(request, response) {
    response.render('apt');
});
app.get('/ist', function(request, response) {
    response.render('ist');
});
app.post('/courses', urlEncodedParser, function(request, response) {
    const selectedCourse = request.body.course;
    let courses = [];

    if (selectedCourse === 'apt') {
        courses = ['APT2050:Computer Networks & Telecommunications', 'APT2060:Data Structures & Algorithms', 'APT2080:Introduction to Software Engineering', 'APT2055:Hardware and Software Practicum', 'APT2090:Computer Graphics', 'APT3010:Introduction to Artificial Intelligence', 'APT3040:Object Oriented  Design & Programming', 'APT3050:Introduction to Project Management', 'APT3060:Mobile Programming', 'APT3095:Cloud Computing and Visualization', 'APT3025:Applied Machine Learning'];
    } else if (selectedCourse === 'ist') {
        courses = ['IST1020 : Introduction to Information Systems', 'IST4030: Database Management Systems', 'IST4040 : Decision Support Systems', 'IST4035: Advanced Web Design and Applications', 'IST4060: Telecommunications & Networks', 'IST4070 : Object Oriented Programming', 'IST4900 : Information Systems Project', 'IST3015 : Business Data Analytics', 'IST3005 : Application of  Social Media for Business', 'IST4020 : Systems Analysis and Design', 'IST3050 : Introduction to Security Systems'];
    }

    response.render('courses', { course: selectedCourse, courses: courses });
});

app.listen(port);
console.log(`Server is running on http://localhost:${port}`);
