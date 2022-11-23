//Dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models
require("../models/Estoque");
const Estoque = mongoose.model("estoque"); //estoque = name of the table
require("../models/Historico");
const Historico = mongoose.model("historico");
require("../models/Items");
const Items = mongoose.model("items");



//Rotas
    //Items
    router.get('/item/all', (req, res)=>{
        Items.find().lean().then((allItems)=>{
            res.send(allItems)
        });
    })

    router.get('/item/:id', (req, res)=>{
        //Items.findOne({_id: req.params.id}).lean().then....

    })

    router.post('/item/novo', (req, res)=>{
        const newItem = {
            id: '',
            nome: '',
            localizacao_cidade: '',
            localizacao_estoque: '',
            tamanho: ''
        }
    
        new Items(newItem).save().then(()=>{
            console.info("Item saved")
        }).catch((err)=>{
            console.error(`Unable to save item: ${err}`)
        })
    })

    //Historico
        
    //Estoque


module.exports = router;
