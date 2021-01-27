const { check, validationResult, body } = require('express-validator');
const {multerError} = require ('multer')

module.exports = {
    create: [
    check ('nombre')
        .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar el nombre del producto y debe contener al menos 4 letras')
        .notEmpty().withMessage('Este campo no puede estar vacío'),
    check ('marca')
        .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar la marca del producto y debe contener al menos 4 letras')
        .notEmpty().withMessage('Este campo no puede estar vacío'),
    check ('descripcion')
        .isLength ({ min: 10}).withMessage ('la descrupción ed demasiado corta')
        .notEmpty().withMessage('Este campo no puede estar vacío'),
    ],
    
    edit: [
        check ('nombre')
            .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar el nombre del producto y debe contener al menos 4 letras')
            .notEmpty().withMessage('Este campo no puede estar vacío'),
        check ('descripcion')
            .isLength ({ min: 10}).withMessage ('la descrupción ed demasiado corta')
        ]
}
