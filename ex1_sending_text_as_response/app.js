const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('You are in Home page')
})

app.get('/about', (req, res) => {
    res.send('You are in about page')
  })

app.get('/contact', (req, res) => {
    res.send('You are in Contact page')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})