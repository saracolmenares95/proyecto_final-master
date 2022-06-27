const Farmacia = require('../models/Farmacia')
// exports.crearProducto = async (req, res) => {
//     try {
//         let contacto
//         contacto = new Farmacia(req.body)
//         await contacto.save()
//         res.send(contacto)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("Hay un problema")
//     }
// }
exports.obtenerProductos = async(req, res) => {
    try {
        let contactos = await Farmacia.find();
        res.json(contactos)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.obtenerproducto = async (req, res) => {
    try {
        const { medicamento } = req.body
        console.log(medicamento)
        let producto = await Farmacia.findOne({medicamento})
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
exports.actualizarproducto = async (req, res) => {
    try {
        const { inventario, medicamento } = req.body

        const existeUsuario = await Farmacia.findOne({medicamento })
        if (!existeUsuario) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        existeUsuario.inventario =  inventario


        let procesoUpdate = await Farmacia.findOneAndUpdate({ medicamento }, existeUsuario, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
