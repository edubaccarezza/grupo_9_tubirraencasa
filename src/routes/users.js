// ENRUTADOR USERS

// const path = require('path');
const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require ('multer');
const usersController = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator');
const guestMiddleware = require('../middlewares/guestMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image'), registerValidator, usersController.create);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', loginValidator, usersController.loginIn);
router.get('/logOut',usersController.logOut);

router.get('/edit/:id',usersController.edit);
router.put('/edit/:id',registerValidator,usersController.update);

router.delete('/delete/:id',usersController.delete); 

module.exports = router;