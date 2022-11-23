//Dependencies
const mongoose = require('mongoose')
const express = require('express');
const app = express();

//Configuration
const DBConnection = require('./configs/DBConnection');

//Routers config files
const estoque = require("./routers/estoque")
// const estoque = require("./routers/estoque")
// const estoque = require("./routers/estoque")



//Mongoose
    mongoose.Promise=global.Promise
    mongoose.connect(DBConnection.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("Conectado ao Mongo")
    }).catch((err)=>{
        console.log(`Erro ao Conectar ao Mongo: ${err}`)
    })


//Configuração de rotas
    // app.get("/", (req, res)=>{
    //     res.send("Temos uma rota")
    // });

    app.use('/estoque', estoque)

//Server config
    app.listen(8081, ()=>{
        console.log("Servidor Rodando!")
    });

