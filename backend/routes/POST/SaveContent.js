const express = require('express');
const router = express.Router();
const pool = require('../../database/mysql_connect');

router.post('/', (req, res) => {
    const contentData = req.body.content;
    const id = contentData.id;

    if (!contentData) {
        return res.status(400).send('Žiadne dáta na uloženie');
    }

    pool.query('UPDATE content SET value = ? WHERE id = ?', [JSON.stringify(contentData), id], function(err, result) {
        if (err) {
            console.error(`Chyba pri aktualizácii kľúča:`, err);
        }
    });
    
    res.send('Obsah bol aktualizovaný');
});

module.exports = router;
