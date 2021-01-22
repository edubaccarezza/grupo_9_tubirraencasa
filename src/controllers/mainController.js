const path = require('path')
const fs = require('fs');


let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
productos = JSON.parse(productos)

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {
    // index: function (req,res) {
    //     return res.render('index', { mensaje: "Bienvenidos a nuestra página..." });
    // }
    index: function(req, res) {
        return res.render('index', { productos });   
    },
}

module.exports = mainController