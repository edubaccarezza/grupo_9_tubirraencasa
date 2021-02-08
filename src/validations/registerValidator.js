const {check , body} = require ('express-validator');
const path = require ('path');

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
        .isLength ({min:8})
        .withMessage ('La contraseña debe tener como mínimo 8 caracteres'),//.bail()
        /*.isStrongPassword ({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
        .withMessage ('La contraseña debe tener como mínimo 1 mayúscula, 1 minúscula, 1 numero, 1 caracter especial'),*/
    /*body('repassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }else{
            return true;
        }
        
    }),
    /*body('image').custom((value) => {
        if (path.extname(value) != 'JPG' && path.extname(value) != 'JPEG' && path.extname(value) != 'PNG' && path.extname(value) != 'GIF') {
            throw new Error('Password confirmation does not match password');
        }

        return true;
    }),*/

]