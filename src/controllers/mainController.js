const path = require('path')

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {
    index: function (req,res) {
        return res.render('index', { mensaje: "Bienvenidos a nuestra página..." });
    }

}

module.exports = mainController