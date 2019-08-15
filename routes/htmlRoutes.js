var db = require("../models");
const express = require('express');
const router = express.Router();



module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

    app.get('/', function(req, res){
      db.petProfile.findAll({limit:3}).then(function(petProfile) {
        console.log(petProfile);
        res.render("index",{
          profiles: petProfile
        });
      });
    });

    app.get('/browse', function(req, res){
      db.petProfile.findAll({}).then(function(dbProfiles) {
        console.log('dbProfiles',dbProfiles);
        res.render("browse", {
          friends: dbProfiles
        });
      });
    })

    app.get('/profile', function(req, res){

      res.render('profile')
    })
};
