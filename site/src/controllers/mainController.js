const path = require('path')

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {
    index: function (req,res) {
        return res.render('index', { mensaje: "Bienvenidos a nuestra página..." });
    },
    productCart: function (req,res) {
        return res.render('./products/productCart');
    },
    login: function (req,res) {
        return res.render('./users/login');
    },
    register: function (req,res) {
        return res.render('./users/register');
    },
    productos: function (req,res) {
        return res.render('./products/productos');
    },
    actualizar: function(req,res) {
        return res.render('./products/actualizar')
    }
}

module.exports = mainController