var express = require('express');
var router = express.Router();
const knex = require('../knex.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.idToGet) {
    let query = req.query.idToGet;
    res.redirect(`/tacos/${query}`)
  }
  knex('tacos')
    .select('id', 'name', 'picture', 'description')
    .then((tacosFromKnex) => {
      res.render('index', {
        tacos: tacosFromKnex
      });
    })
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

router.delete('/', (req, res, next) => {
  let id = req.body.id;
  knex('tacos')
    .where('id', id)
    .first()
    .del()
    .then(() => {
      res.render('index');
    })
})

module.exports = router;
