//Dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


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

    router.post('/item/novo', async (req, res)=>{
        //console.log(JSON.stringify(req.body.nome))

        const newItem = {
            nome: req.body.nome,
            localizacao_cidade: req.body.localCidade,
            localizacao_estoque: req.body.localEstoque,
            tamanho: req.body.tamanho
        }
    
        new Items(newItem).save().then( async (item)=>{
            res.send("Item saved successfully")
            await handleNewMoviment(item._id, 'Registrando', newItem.nome)
        }).catch((err)=>{
            console.error(`Unable to save item: ${err}`)
        })

    })

    //Historico
    async function handleNewMoviment(idOfProduct, moviment, nameOfProduct){
        const newHist = {
            idDoItem: idOfProduct,
            movimento: moviment,
            nomeDoProduto: nameOfProduct
        }
        
        new Historico(newHist).save().then(()=>{
            console.log("Saved on history")
        }).catch((err)=>{
            console.error(`Unable to save history: ${err}`)
        })
    }
        
    //Estoque


module.exports = router;
