const express = require('express');
const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));


app.get('/', (req, res) => {
    // Use res.sendFile() to send the HTML file
    res.sendFile(__dirname + '/public/index.html');
  });


app.get('/about', (req, res) => {
    // Use res.sendFile() to send the HTML file
    res.sendFile(__dirname + '/public/about.html');
});


app.get('/contact', (req, res) => {
  // Use res.sendFile() to send the HTML file
  res.sendFile(__dirname + '/public/contact.html');
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });