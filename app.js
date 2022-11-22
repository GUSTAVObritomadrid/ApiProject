const mongoose = require('mongoose')
const express = require('express');
const DBConnection = require('./configs/DBConnection');
const app = express();


//Mongoose
    mongoose.Promise=global.Promise
    mongoose.connect(DBConnection.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Conectado ao Mongo")
    }).catch((err)=>{
        console.log(`Erro ao Conectar ao Mongo: ${err}`)
    })


//Configuração de rotas
    app.get("/", (req, res)=>{
        res.send("Temos uma rota")
    });

//Server config
    app.listen(8081, ()=>{
        console.log("Servidor Rodando!")
    });

