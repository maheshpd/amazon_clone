console.log("Hello World");

const express = require("express");

const PORT = 3000;
const app = express();

//CREATING AN API

app.get('/hello-world',(req,res) => {
    res.json({hi: "hello world india"});
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
})