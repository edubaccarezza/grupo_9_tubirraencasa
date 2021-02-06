const { check, validationResult, body } = require('express-validator');
const {multerError} = require ('multer')

module.exports = {
    create: [
    check ('nombre')
        .notEmpty().withMessage('Este campo no puede estar vacío')
        .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar el nombre del producto y debe contener al menos 4 letras'),
    check ('marca')
        .notEmpty().withMessage('Este campo no puede estar vacío')
        .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar la marca del producto y debe contener al menos 4 letras'),
    check ('descripcion')
        .isLength ({ min: 10}).withMessage ('la descripción es demasiado corta')
        .notEmpty().withMessage('Este campo no puede estar vacío'),
    check('imagen').custom((value, { req }) => {
        if (req.files.error !== 'type') {
          return true
        }
        throw new Error('La imagen debe ser de tipo PNG');
        })
    ],
    
    edit: [
        check ('nombre')
            .isLength ({ min: 4, max: 50}).withMessage ('Debes ingresar el nombre del producto y debe contener al menos 4 letras')
            .notEmpty().withMessage('Este campo no puede estar vacío'),
        check ('descripcion')
            .isLength ({ min: 10}).withMessage ('la descrupción ed demasiado corta'),
        check('imagen').custom((value, { req }) => {
            if (req.files.error !== 'type') {
              return true
            }
            throw new Error('La imagen debe ser de tipo PNG');
            })
    ]
}
