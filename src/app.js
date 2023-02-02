const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 5000;

// public static path
const homepath = (path.join(__dirname, "../public")); //now this is used for  dynamic  so in express we only use one which is main file index.
// const view_path = (path.join(__dirname, "/views"));
const templates_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");


/* This is routing for only static pages 

const aboutpath=(path.join(__dirname,"../public/about.html"));
const error404=(path.join(__dirname,"../public/404error.html"));
const whether=(path.join(__dirname,"../public/whether.html"));

Routing
app.use(express.static(homepath));
app.use(express.static(aboutpath));
app.use(express.static(error404));
app.use(express.static(whether));

app.get("/", (req, res) => {
    res.sendFile(path.join(homepath));
});

app.get("/about",(req,res)=>{
    res.sendFile(aboutpath);
});

app.get("/whether",(req,res)=>{
    res.sendFile(whether);
});

app.get("*",(req,res)=>{
    res.sendFile(error404),{
        errorMsg: "Opps! Page Not Found"
    }
});

*/

/* For Dynamic ... */

//set view Engine
app.set("view engine", "hbs");
app.set('views', templates_path);
// app.set("views", view_path);
hbs.registerPartials(partials_path);
app.use(express.static(homepath));        // When u r using dynamical routing so u need this first.

//Template Engine Route 
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/whether", (req, res) => {
    res.render('whether');
});

app.get("*", (req, res) => {
    res.render('404error');
});

app.listen(port, () => {
    console.log(`Listning from port ${port}`);
});

