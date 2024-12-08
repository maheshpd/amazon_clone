const express = require("express");
const mongoose = require("mongoose")


//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth")

//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://mahesh223prasad:mahesh123@cluster0.enmsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());
app.use(authRouter);

//Connections
mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
})