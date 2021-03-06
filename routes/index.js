const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// router.get('/stylesheets', function (req, res, next){
//     console.log("akjshdakjhsdhkjasdhjk")
//     res.sendFile('/Users/annamedyukh/twitter-js/public/stylesheets/style.css')
// })

router.get('/:name', function(req, res){
    let name = req.params.name;
    let tweets = tweetBank.find( {name: name} );
    res.render('index', { tweets: tweets });
})

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;