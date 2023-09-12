const express = require('express')
const app = express()

const port = 3000;


app.get('/read', (req, res) => {


    res.send('Fetched successfully');

});


app.post('/create', (req, res) => {

    res.send('Created successfully');
});

app.put('/update', (req, res) => {

    res.send('Updated successfully');

});


app.delete('/delete', (req, res) => {

    res.send('Deleted successfully');

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log('http://localhost:3000/read')
})