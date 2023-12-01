import models from '../models/productos.model.js'
import handleError from '../utils/handleError.js'

const obtenerProductos = async (req, res) => {
    let id = req.params.id

    try {
        if ( id ) {
            const producto = await models.leerProducto(id)
            return res.status(200).json(producto)
        } else {
            const productos = await models.leerProductos()
            return res.status(200).json(productos)
        }
    } catch (error) {
        handleError(res, '[obtenerProductos]: No se pudo acceder a los producto/s', error)
    }
}

const guardarProducto = async (req, res) => {
    const producto = req.body

    try {
        const productoGuardado = await models.guardarProducto(producto)
        res.status(201).json(productoGuardado)
    } catch (error) {
        handleError(res, '[guardarProducto]: No se puedo guardar el producto', error)
    }
} 

const actualizarProducto = async (req, res) => {
    const id = req.params.id
    const producto = req.body


    try {
        const productoActualizado = await models.modificarProducto(id, producto)
        res.status(200).json(productoActualizado)
    } catch (error) {
        console.log('[actualizarProducto]: No se pudo actualizar el producto', error)
        res.status(500).send('[actualizarProducto]: No se pudo actualizar el producto')
    }

}

const borrarProducto = async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {
        const productoBorrado = await models.eliminarProducto(id)
        res.status(200).json(productoBorrado)
    } catch (error) {
        console.log('[borrarProducto]: No se pudo borrar el producto', error)
        res.status(500).send('[borrarProducto]: No se pudo borrar el producto')
    }

}

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}