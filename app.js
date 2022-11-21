const http = require('http');
const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Temos uma rota")
});

http.createServer((req, res)=>{
    console.log("Servidor Rodando!")
}).listen(8081);

