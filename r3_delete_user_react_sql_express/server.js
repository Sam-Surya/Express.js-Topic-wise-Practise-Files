const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser'); // Add bodyParser for parsing POST request body
const port = 3002;

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

// Use bodyParser to parse JSON data from POST requests
app.use(bodyParser.json());

// User Deletion endpoint
app.post('/api/users', async (req, res) => {
  try {
    const { Regno } = req.body; // Assuming you only need the Regno for deletion

    // Delete user data from the database based on Regno
    await connection.query('DELETE FROM users WHERE Regno = ?', [Regno]);
    alert("User Deleted Successfully")
    res.status(204).send(); // 204 No Content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// For all other requests, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
