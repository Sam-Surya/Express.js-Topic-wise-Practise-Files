const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;


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

// Define a route to fetch data from the "users" table
app.get('/', (req, res) => {
   
    const sql = 'SELECT * FROM students';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({ error: 'Error fetching data from the database' });
            return;
        }
        res.json(results); // Send the fetched data as JSON
        
    });
});


// Close the database connection when the application exits
process.on('exit', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error closing the database connection:', err);
            return;
        }
        console.log('Disconnected from the database');
    });
});




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log('http://localhost:3000/');
});

