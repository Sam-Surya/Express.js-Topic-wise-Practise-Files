const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios');


app.use(bodyParser.json());

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
app.get('/api/update', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


// Define a route to update data using the PUT method
app.put('/api/update/:Regno', (req, res) => {
  const { Regno } = req.params;
  const updatedData = req.body;

  // Update the data in the database
  const updateQuery = 'UPDATE users SET ? WHERE Regno = ?'; 
  connection.query(updateQuery, [updatedData, Regno], (updateErr, result) => {

    if (updateErr) {
      console.error('Error updating data in the database:', updateErr);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (result.affectedRows === 0) {
      // No rows were updated, indicating that the record with the given Regno was not found
      res.status(404).json({ message: 'Record not found' });
      return;
    }

    // Data updated successfully
    res.status(200).json({ message: 'Data updated successfully' });
  });


});



// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
