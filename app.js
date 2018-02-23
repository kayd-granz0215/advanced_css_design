
var express = require("express");
// var sassMiddleware = require("express-sass-middleware");
var app = express();

app.set("view engine", "ejs");

// app.get('/css/style.css', sassMiddleware({
//       file: 'public/sass/main.scss', 
//       precompile: true,                 
// }));      

app.use(express.static(__dirname + "/public"));




app.get("/", function(req, res){
    res.render("index");
});



app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("Natours server is configured and application is back up and running ! ! !");
});