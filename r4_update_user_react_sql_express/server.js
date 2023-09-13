const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

const mysql = require('mysql');
const port = 3003;

// Serve the React build files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));


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

// User registration endpoint
app.post('/api/users', async (req, res) => {
  
    try {
  
      const { Username, Password, Regno, Phone } = req.body;
  
      // Insert user data into the database
      await 
      connection.query(
        'UPDATE users SET Phone = ? WHERE Regno = ?',
        [Phone, Regno]
       
      );
      
      
  
      res.status(201).json({ message: 'Phone Number Updated successfully' });
  
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
