var express = require('express');
var router = express.Router();
const knex = require('../knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.idToGet) {
    let query = req.query.idToGet;
    res.redirect(`/tacos/${query}`)
  }
  if(req.cookies.session){
    let decoded = jwt.verify(req.cookies.session, 'EGGS');
    let user = decoded.user;
    console.log(user.username);
    knex('users')
      .where('username', user.username)
      .first()
      .then((exists) => {
        if(exists){
          knex('tacos')
            .select('id', 'name', 'picture', 'description')
            .then((tacosFromKnex) => {
              res.render('index', {
                tacos: tacosFromKnex
              });
            })
        } else {
          res.redirect('/');
        }
      })
  } else {
    res.redirect('/');
  }

});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  knex('tacos')
    .where('id', id)
    .then((selectedTaco) => {
      res.render('index', {
        tacos: selectedTaco
      });
    })
})

router.post('/', (req, res, next) => {
  knex('tacos')
    .insert(req.body)
    .then(() => {
      res.redirect('/tacos')
    })
})

router.put('/', (req, res, next) => {
  let newInfo = req.body;
  let id = req.body.id;
  knex('tacos')
    .where('id', id)
    .first()
    .update({name: newInfo.name, picture: newInfo.picture, description: newInfo.description})
    .then(() => {
      res.status(200).send(true);
    })
})

router.delete('/', (req, res, next) => {
  let id = req.body.id;
  knex('tacos')
    .where('id', id)
    .first()
    .del()
    .then(() => {
      res.status(200).send(true);
    })
})

module.exports = router;
