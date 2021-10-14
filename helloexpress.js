const express = require('express');

//instance of express
const app = express();

//specify the port for better modification
const port = 8000;

//start using the app

//requesting for the GET method. "/" is homepage
app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

//another route
app.get('/', (req, res) => {
    res.send('<h1>About us</h1> <br> <p>You are on About us page</p>');
  });

//specify port where request is listened from 
app.listen(port, () => {
  console.log(`Express app listening on ${port}`);
})