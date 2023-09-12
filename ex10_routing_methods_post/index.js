const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "test2"
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


// Handle user registration
app.post('/register', (req, res) => {
    const { Username, Password , Age, Regno, Branch, Phone} = req.body;
    const sql = 'INSERT INTO users (Username, Password , Age, Regno, Branch, Phone) VALUES (?, ?, ? , ? ,? , ?)';

    connection.query(sql, [Username, Password , Age, Regno, Branch, Phone], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.send('Registration failed. Please try again.');
            return;
        }
        res.send('Registration successful!'); // You can redirect or display a success message
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log('http://localhost:4000/')
});
