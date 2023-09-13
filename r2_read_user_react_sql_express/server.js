const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const port = 3001;

// Serve the React build files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your database password here
  port: '3306',
  database: 'test2',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});




app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const users = results.map((row) => ({
        Regno: row.Regno,
        Username: row.Username,
        Age: row.Age,
        Phone: row.Phone,
        Branch: row.Branch,
      }));

      res.status(200).json(users);
    }
  });
});




// For all other requests, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
