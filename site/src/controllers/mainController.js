const path = require('path')

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {
    index: function (req,res) {
        return res.render('index', { mensaje: "Bienvenidos a nuestra página..." });
    },
    productCart: function (req,res) {
        return res.render('productCart');
    },
    login: function (req,res) {
        return res.render('login');
    },
    register: function (req,res) {
        return res.render('register');
    },
    productos: function (req,res) {
        return res.render('productos');
    },
}

module.exports = mainController