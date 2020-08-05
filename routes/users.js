const mongoose = require('mongoose');
const { User, validate } = require('../models/user');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.find();
  res.send('respond with a resource');
});

router.post('/', async (req, res)=>{
  const { error } = validate(req.body);
  if(error)
    return res.status(500).send(error.details[0].message);

    let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    api: [
      {
        name: req.body.api[0].name, 
        source: [
        { 
          code: req.body.api[0].code[0], 
          key: req.body.api[0].key[0], 
          source: req.body.api[0].source[0]
        }
      ]
    }]
  });
  user = await user.save();
  res.send(user);
  res.end();
});

module.exports = router;
