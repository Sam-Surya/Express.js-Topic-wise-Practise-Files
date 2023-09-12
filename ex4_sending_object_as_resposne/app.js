const express = require('express');
const app = express();
const port = 1800;

// Define a route that sends an array of objects as a JSON response
app.get('/', (req, res) => {
  const dataArray = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
  ];

  res.json(dataArray);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
