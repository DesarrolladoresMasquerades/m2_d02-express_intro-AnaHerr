const express = require("express");

require("dotenv/config")

const app = express();

app.use( express.static("public") )

app.all("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

//this responds to all HTTP verbs
app.all("/home", (request, response)=>{//the request URL, what the user wants
     response.sendFile(__dirname + "/views/home.html")
})

app.listen(3000, ()=>{
    console.log("App listening on port 3000")
});
