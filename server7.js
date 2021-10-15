const express = require("express");
const app = express();
const port = 5000;

//creating a middleware
const userMiddleware = (req, res, next) => {
    console.log(`The request method is ${req.method} `);
    console.log(`The request ID is ${req.params.id} `);
    console.log(`The request path is ${req.path} `);

    next();
};

//mounting the middleware to the express app method/verb "get"
app.get("/user/:id", userMiddleware);

app.listen(port, ()=>{
    console.log(`The application's running on port: ${port}`);
})