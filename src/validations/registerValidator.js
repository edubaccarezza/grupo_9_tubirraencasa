const { check} = require ('express-validator');

module.exports = [
    check ('firstName')
        .notEmpty ()
        .withMessage ('Este campo es obligatorio').bail()
        .isLength ({ min: 2, max: 20})
        .withMessage ('Este campo debe tener como mínimo 2 caracteres y como máximo 20'),
    check ('lastName')
        .notEmpty ()
        .withMessage ('Este campo es obligatorio').bail()
        .isLength ({ min: 2, max: 20})
        .withMessage ('Este campo debe tener como mínimo 2 caracteres y como máximo 20'),
    check ('email')
        .notEmpty ()
        .withMessage ('Este campo es obligatorio').bail()
        .isEmail()
        .withMessage ('Debés ingresar un email válido. Recordá usar @.'),
    check ('password')
        .notEmpty ()
        .withMessage ('Este campo es obligatorio').bail()
        .isLength ({min:6, max:15})
        .withMessage ('La contraseña debe tener como mínimo 6 caracteres y como máximo 15'),
]