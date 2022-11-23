const mongoose = require("mongoose")
const schema = mongoose.Schema;

const Historico = new Schema ({
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