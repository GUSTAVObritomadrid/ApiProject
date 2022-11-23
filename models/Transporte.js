const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Transporte = new Schema ({
    id:{
        type: String,
        required: true
    },
    caminhao:{
        type: String,
        required: true
    },
    nota:{
        type: String,
        required: true
    }
})

mongoose.model("transporte", Transporte)