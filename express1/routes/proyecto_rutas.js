const express = require('express')
const router = express.Router();
const contactoController = require('../controllers/contactoController')
const farmaciaController = require('../controllers/farmaciaController')
router.get('/obtener-productos/', farmaciaController.obtenerProductos)
router.get('/obtener-producto/', farmaciaController.obtenerproducto)
router.put('/actualizar-producto/', farmaciaController.actualizarproducto)



router.post('/', contactoController.crearContacto)
router.post('/login', contactoController.autenticar)
router.get('/obtener-contacto/:id', contactoController.obtenerContacto)
router.get('/obtener-contactos/', contactoController.obtenerContactos)
router.put('/actualizar-contacto', contactoController.actualizarContacto)
router.delete('/borrar-contacto/:id', contactoController.borrarContacto)

module.exports = router
