const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
}) 

// app.get("/about", function(req, res){
//     res.render("about");
// })

app.get("/products", function(req, res){
    res.render("products");
})

app.listen(3000, function(){
    console.log("Server is started on port 3000");
})