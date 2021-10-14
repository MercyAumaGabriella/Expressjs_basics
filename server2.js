const express = require("express");

const app = express();
const port  = 5000;

//specify resource in route. in GET you specify the req and handler
app.route("/users")
   .get(function(req, res){
       res.send("This is a GET request");
    })
    .post((req, res) =>{
        res.send("This is a POST request");
    });

//using GET, PUT, DELETE with an element URIs
app.route("/users/:user_id")
   .get(function(req, res){
       res.send(`Accessing element URI with User id: ${req.params.user_id}`);
   })
   .put((req, res) => {
       res.send(`Will be updating element with id ${req.params.user_id}`);
   })
   .delete((req, res) => {
       res.send(`Will be deleting record with id: ${req.params.user_id}`);
   });

app.listen(port, () => {
    console.log(`App has started on port: ${port}`);
})