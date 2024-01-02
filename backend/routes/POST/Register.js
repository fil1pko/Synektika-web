const express = require('express');
const router = express.Router();
const userModel = require('../../models/user');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  
  userModel.createUser(username, password, function(err, results) {
    if (err) {
      res.status(500).send('Chyba pri vytváraní užívateľa');
      console.log(err);
      return;
    }
    res.status(201).send('Užívateľ úspešne vytvorený');
  });
});

module.exports = router;