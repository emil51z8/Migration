var express = require('express');
var router = express.Router();
const { User } = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const users =  await User.findAll();
    res.render('index', { title: 'population table // Emil', users });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
