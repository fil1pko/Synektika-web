const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  
  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Authorization: Bearer <token>
    jwt.verify(token, 'tajny_kod', (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}

module.exports = verifyToken;