const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    console.log("here");
    res.render("index", {text: "world"});
});


app.get("/users", (req, res) => {
    res.send('user list');
})


app.get("/users/new", (req, res) => {
    res.send('User Form');
})

app.listen(3000);