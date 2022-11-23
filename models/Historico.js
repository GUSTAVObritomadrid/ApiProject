const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Historico = new Schema ({
    id:{
        type: String,
        required: true
    },
    movimento:{
        type: String,
        required: true
    },
    disponivel:{
        type: String,
        required: true
    }
})

mongoose.model("historico", Historico)