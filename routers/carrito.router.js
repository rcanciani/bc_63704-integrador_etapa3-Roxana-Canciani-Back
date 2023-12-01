import express from 'express'
const routerCarrito = express.Router()
import controller from '../controllers/carrito.controller.js'

// ! Hacer un post (Create) para guardar el carrito en Mongo DB
// * http://localhost:8080/api/carrito/
routerCarrito.post('/', controller.guardarCarrito)

export default routerCarrito
