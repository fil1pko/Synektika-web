const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();
const cors = require("cors");   

/*
* MIDDLEWARE, povolenie prijmat json z frontendu
*/
app.use(express.json({extended:false}));

app.get("/", (request, response) => {
    response.send("running");
});

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});