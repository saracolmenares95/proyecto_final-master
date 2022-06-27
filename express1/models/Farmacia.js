
const mongoose = require('mongoose')

const farmaciaSchema = mongoose.Schema({
    medicamento: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required:  false
    },
    precio: {
        type: Number,
        required:  false
    },
    inventario: {
        type: Number,
        required:  false,
    },
    descuento_afiliado:{
        type: Number,
        required:  false
    },
    imagen:{
        type: String,
        required:  false
    }
})

module.exports = mongoose.model("farmacia", farmaciaSchema)
