let express = require("express");

//Establish routes for navigating the app (API and HTML).
let router = express.Router();

//Handle data manipulated by user.
let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        };
        //Displays home page which includes all burgers and their 'devoured' state (boolean value).
        res.render("index", hbsObject);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.selectAll(function (data) {
        //Displays burger API.
        res.json(data);
    });
});

router.post("/api/burgers", function (req, res) {
    //Add burger name on click; default is set to false, so user does not enter this value.
    burger.createOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {

            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    //Update value of 'devoured' to 0 (false) or 1 (true) on click. 
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
