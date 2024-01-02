const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('injected');
    const data = { html: '<p>Váš dashboard obsah...</p>' }; 
    res.json(data);
});

module.exports = router;
