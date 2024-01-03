const express = require('express');
const router = express.Router();
const pool = require('../../database/mysql_connect'); // Importujte váš MySQL pool

router.get('/', (req, res) => {
    const id = req.query.lang;
    // console.log(id);
    pool.query('SELECT * FROM content WHERE id = ?', [id] , function(err, data){
        if(err){
            return res.status(500).send('Chyba servera');
        }
        
        let htmlContent = '';
        htmlContent += `<input id="id" type="hidden" name="id" value="${id}">`
        data.forEach(row => {
            const contentObj = JSON.parse(row.value);
            for (const [key, value] of Object.entries(contentObj)) {
                htmlContent += `<label for="${key}">${key}</label>`;
                htmlContent += `<input type="text" id="${key}" name="${key}" value="${value}"><br>`;
            }
        });

        res.send(htmlContent)

    });
});

module.exports = router;
