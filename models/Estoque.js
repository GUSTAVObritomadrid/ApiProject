const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Estoque = new Schema ({
    id:{
        type: String,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    quantidade:{
        type: String,
        required: true
    },
    localizacao:{
        type: String,
        required: true
    }
})

mongoose.model("estoque", Estoque)