const express = require("express");
const app = express();
const port = 4000;

//Another way to access express methods
const router = express.Router();

router.get("/blog", (req, res, next) =>{
   res.send("Hi there, welcome to my blog");
});

//mount the router on the express
app.use(router);

app.listen(port, ()=>{
    console.log(`The application's running on port: ${port}`);
})