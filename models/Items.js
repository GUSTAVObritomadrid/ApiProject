const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Items = new Schema ({
    nome:{
        type: String,
        required: true
    },
    localizacao_cidade:{
        type: String,
        required: true
    },
    localizacao_estoque:{
        type: String,
        required: true
    },
    tamanho:{
        type: String,
        required: true
    }
    
})

mongoose.model("items", Items)