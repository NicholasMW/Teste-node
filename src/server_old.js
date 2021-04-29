const express = require("express");
const app = express();

console.log(app); 

console.clear();

app.get("/", (request, response) => {response.send("Hello World");}); 

app.listen(3000, function(){console.log("O servidor está rodando...");});