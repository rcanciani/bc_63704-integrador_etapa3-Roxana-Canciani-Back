
const uploadImagen = (req, res) => {
    const file = req.file

    if( !file ) {
        return res.status(400).send('No se recibió ninguna imagen')
    }

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
    console.log(req.protocol) // http o https
    console.log(req.get('host')) // localhost:8080
    console.log(file.filename) // nombre del archivo
    console.log(urlCompletaBack)
    res.status(201).json({foto: urlCompletaBack})    
}

export default {
    uploadImagen
}