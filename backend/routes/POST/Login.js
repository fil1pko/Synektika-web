const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../../database/mysql_connect'); // Importujte váš MySQL pool

router.post('/', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM users WHERE username = ?', [username], function(err, results) {
    if (err) {
      return res.status(500).send('Chyba servera');
    }
    if (results.length === 0) {
      return res.status(401).send('Neplatné užívateľské meno alebo heslo');
    }

    const user = results[0];
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (err) {
        return res.status(500).send('Chyba servera');
    }
        if (!isMatch) {
        return res.status(401).send('Neplatné užívateľské meno alebo heslo');
    }
    const token = jwt.sign({ id: user.id, username: user.username }, 'tajny_kod', { expiresIn: '1h' });
    res.json({token});
    });
  });
});

module.exports = router;