const express = require("express");
const app = express();
const port = 5000;

//creating a middleware
const dateMiddleware = (req, res, next) => {
    console.log(`The current Date's: ${Date.now()} `);

    //apply next function becasue without it code will hang
    //You can also res to end call

    next();
};

//hooking/mounting the middleware to the express app
app.use(dateMiddleware);

app.listen(port, ()=>{
    console.log(`The application's running on port: ${port}`);
})