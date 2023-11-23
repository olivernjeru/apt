const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'oliver',
    password: 'psswd123',
    database: 'schooldb'
});
connection.connect();

function viewStudents() {
    let sql = "SELECT id, name FROM students";
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        console.log('Records available: ' + rows.length);
        for (let i = 0; i < rows.length; i++) {
            console.log(rows[i].id + ' ' + rows[i].name);
        }

    });
}
viewStudents();
// connection.end(); // NB: if running a server, remove this line

function addStudent() {
    let sql = "INSERT INTO students (id, name) VALUES " +
    "(1, 'John Doe')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Records inserted: ' + result.affectedRows);
    });
}

addStudent();
viewStudents();
connection.end(); //NB: if running a server, remove this line