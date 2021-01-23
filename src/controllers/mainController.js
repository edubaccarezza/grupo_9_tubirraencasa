// const path = require('path')
// const fs = require('fs');
let db = require("../database/models")

// let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
// productos = JSON.parse(productos)

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {

    index: function(req, res) {
        db.Producto.findAll ()
        .then (function(productos) {
            res.render( 'index', {
                productos: productos 
            })
        })

    }
}


module.exports = mainController