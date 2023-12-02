const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT 
});

conn.connect((err) => {
    if(err){
        console.log(`nepodarilo sa mi pripojit ${err}`);
    } else{
        console.log("pripojene na mysql :)");
    }
})

module.exports = conn;