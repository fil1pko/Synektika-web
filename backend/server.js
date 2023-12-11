const express = require("express");
const mysql = require("./database/mysql_connect");
const PORT = process.env.PORT || 5001;
const app = express();
const cors = require("cors");   

/*
* MIDDLEWARE, povolenie prijmat json z frontendu
*/
app.use(express.json({extended:false}));

app.get("/", (request, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});