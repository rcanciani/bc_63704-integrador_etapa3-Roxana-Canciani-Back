import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/upload.controller.js'
import uploadMiddleware from '../utils/handleStorage.js'


/* POST - request para guardar una imagen */
routerUpload.post('/', uploadMiddleware.single('foto'), controller.uploadImagen)

export default routerUpload