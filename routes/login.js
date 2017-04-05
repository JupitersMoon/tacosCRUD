var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../knex');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', (req, res, next) => {
  // console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  knex('users')
    .select('*')
    .where('username', username)
    .first()
    .then((user) => {
      // console.log(user);
      bcrypt.compare(password, user.hashed_password, (err, result) => {
        if(result){
          let token = jwt.sign({user:user}, 'EGGS');
          res.cookie('session', token);
          res.redirect('/tacos');
        } else {
          res.render('login', {error: 'LOgin wrong lmao'});
        }
      })
      // res.render('login')
    })
})

module.exports = router;
