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

app.all("/hobbies", (req, res)=>{
    res.sendFile(__dirname + "/views/hobbies.html")
})

app.all("/hobbies/crochet", (req, res)=>{
    res.sendFile(__dirname + "/views/crochet.html")
})

app.all("/hobbies/dancing", (req, res)=>{
    res.sendFile(__dirname + "/views/dancing.html")
})

app.all("/hobbies/hiking", (req, res)=>{
    res.sendFile(__dirname + "/views/hiking.html")
})


app.listen(3000, ()=>{
    console.log("App listening on port 3000")
});

