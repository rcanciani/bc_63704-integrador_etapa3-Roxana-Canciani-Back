import { check } from 'express-validator'
import productoMiddleware from '../middlewares/productos.middleware.js'

const productoDeleteValidator = [
    // Tengo que tener un array de Middleware
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado producto'),
    productoMiddleware
]

const productoCreateValidator = [
    // Tengo que tener un array de Middleware
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es requerido'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoria es requerido'),
    productoMiddleware
]

// productoUpdateValidator
// productoReadOneValidor

export default {
    productoDeleteValidator,
    productoCreateValidator
}