const mongoose = require("mongoose")
const schema = mongoose.Schema;

const Estoque = new Schema ({
    nome:{
        type: String,
        required: true
    },
    quantidade:{
        type: String,
        required: true
    }
})

mongoose.model("estoque", Estoque)