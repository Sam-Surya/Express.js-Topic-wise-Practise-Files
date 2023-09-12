const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 13000;

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "test1"
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Middleware for parsing POST request data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));





// Serve the registration form
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/public/delete.html');
});

app.get('/update', (req, res) => {
    res.sendFile(__dirname + '/public/update.html');
});







// Handle user registration
app.post('/register', (req, res) => {
    const { name, std } = req.body;
    const sql = 'INSERT INTO students (name, class) VALUES (?, ?)';

    connection.query(sql, [name, std], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.send('Registration failed. Please try again.');
            return;
        }
        res.send('Registration successful!'); // You can redirect or display a success message
    });
});




// Handle user deletion
app.post('/delete', (req, res) => {
    const { name, std } = req.body;
    const sql = 'DELETE FROM students WHERE name=?  AND class=?  ';

    connection.query(sql, [name, std], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.send('Registration failed. Please try again.');
            return;
        }
        res.send('Deletion successful!'); // You can redirect or display a success message
    });
});



// Handle user update
app.post('/update', (req, res) => {
    const name = req.body.name;
    const std = req.body.std;
    const uname = req.body.uname;
    const ustd = req.body.ustd;

    const sql = 'UPDATE students SET name = ?, class = ? WHERE name = ? AND class = ?';

    connection.query(sql, [uname, ustd, name, std], (err, results) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Update failed. Please try again.');
            return;
        }
        res.send('User updated successfully!');
    });
});





app.get('/read', (req, res) => {
    const sql = 'SELECT name, class FROM students'; // Replace 'students' with your table name

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching user data:', err);
            res.status(500).send('Error fetching user data');
            return;
        }

        let htmlContent = '<table><thead><tr><th>Name</th><th>Class</th></tr></thead><tbody>';
        results.forEach(user => {
            htmlContent += `<tr><td>${user.name}</td><td>${user.class}</td></tr>`;
        });
        htmlContent += '</tbody></table>';

        // Send the HTML content as a response
        res.send(htmlContent);
    });
});




// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
