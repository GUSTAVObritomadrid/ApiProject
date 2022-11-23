const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Transporte = new Schema ({
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