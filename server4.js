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

//Expanding params(represented by full colons)
app.route("/users/:user_id/merchants/:merchant_id")
   .get(function(req, res){
       res.send(`Accessing element URI with User id: ${req.params.user_id}, merchant id: ${req.params.merchant_id}`);
   })
   .put((req, res) => {
       res.send(`Will be updating element with id ${req.params.user_id}`);
   })
   .delete((req, res) => {
       res.send(`Will be deleting record with id: ${req.params.user_id}`);
   });

//adding a query string (in browsser, hard code /roles/5?name=Admin)
app.route("/roles/:id")
   .get(function(req,res){
       res.send(`Params id: ${req.params.id}, Query name: ${req.query.name}`)
   })

app.listen(port, () => {
    console.log(`App has started on port: ${port}`);
})