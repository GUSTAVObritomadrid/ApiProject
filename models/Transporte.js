const mongoose = require("mongoose")
const schema = mongoose.Schema;

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