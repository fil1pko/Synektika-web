const bcrypt = require('bcrypt');
const pool = require('../database/mysql_connect');

exports.createUser = function(username, password, callback) {
    console.log('Username:', username, 'Password:', password);  
    bcrypt.hash(password, 12, function(err, hash) {
      if (err) {
        callback(err, null);
        return;
      }
  
      pool.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hash],
        function(err, results) {
          callback(err, results);
        }
      );
    });
};  