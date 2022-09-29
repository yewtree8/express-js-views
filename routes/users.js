const express = require("express");

const router = express.Router();

const users = [{ name: "Mat"}, {name: "William"}];

router.get("/", (req, res) => {
    res.send('user list');
})

router.get("/new", (req, res) => {
    res.render("users/new", {firstName : "Test"});
});

router.post("/", (req, res) => {
    const isValid = true;
    if(isValid) {
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length-1}`);
    } else {
        console.error("Error with form");
        res.render('users/new', {firstName: req.body.firstName});
    }
});


router.get('/:id', (req, res) => {
    console.log(req.user);
    res.send(`User get With id ${req.params.id}`)
}).put('/:id', (req, res) => {
    res.send(`Updated get With id ${req.params.id}`)
}).delete(('/:id', (req, res) => {
    res.send(`Deleted user with  With id ${req.params.id}`)
}));


router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
});


module.exports = router;
