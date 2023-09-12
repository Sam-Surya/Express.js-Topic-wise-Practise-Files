const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send("<h1>You are in Home page</h1>")
})

app.get('/about', (req, res) => {

   // res.send("<h1>You are in about page</h1>")
    //res.send("<h1>You are in about page</h1>")
    //res.send("<h1>You are in about page</h1>")

    res.write("<h1>You are in about page</h1>")
    res.write("<h1>You are in about page</h1>")
    res.write("<h1>You are in about page</h1>")
    res.end()
    
  })

app.get('/contact', (req, res) => {
    res.write("<h1>You are in Contact page</h1>")
    res.write("<h1>You are in Contact page</h1>")
    res.write("<h1>You are in Contact page</h1>")
    res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})