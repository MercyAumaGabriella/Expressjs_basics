//Using body parser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port  = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route("/orders")
   .get((req, res)=>{
       res.json({ message: 'Hello Orders from JSON'});
   })
   .post((req, res)=>{
       const body = req.body;
       const order_amt = body.amount;
       const address = body.address;

       res.json({ message: `The message with amount ${order_amt}, address ${address} has been received`});
   });

app.listen(port, function(){
    console.log(`App's started on ${port} `);
})