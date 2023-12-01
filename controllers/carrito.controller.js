import models from '../models/carrito.model.js'

const guardarCarrito = async (req, res) => {
    const carrito = req.body
    console.log(carrito)

    try {
        const carritoGuardado = await models.crearCarrito(carrito)
        res.status(201).json(carritoGuardado)
    } catch (error) {
        let mensaje = 'No se pudo guardar el carrito'
        console.log(mensaje, error)
        res.status(500).send(mensaje)
    }
    
}

export default {
    guardarCarrito
}