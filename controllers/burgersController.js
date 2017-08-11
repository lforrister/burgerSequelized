var db  = require('../models');

var express = require("express");

var router = express.Router();

var path = require('path');


router.get('/', function (req,res) {
    db.Burgers.findAll({}).then(function(data){
        console.log(data);
        res.render("index", {burgers: data});
    });
});

router.post('/burgers/create', function (req, res) {
    db.Burgers.create({burger_name: req.body.burger_name})
    .then(function(){
        res.redirect('/');
    })
});


router.post('/burgers/deleteall', function(req, res){
    db.Burgers.destroy({
        where: {}
    }).then(function(data){
        res.redirect('/');
    })
});

router.post('/burgers/update/:id', function(req, res) {
    var burgerID = parseInt(req.params.id);

    db.Burgers.update({
        devoured: true,
    }, {
        where: {
            id: {
                $eq: burgerID
            }
        }
    }).then(function(data){
        res.redirect('/')
    });
});

module.exports = router;