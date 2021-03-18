// const path = require('path')
// const fs = require('fs');
let db = require("../database/models")

// let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
// productos = JSON.parse(productos)

// RUTA ------> CONTROLADOR -------> VISTA

let mainController = {

    index: function(req, res) {
        db.Categoria.findAll ()
        .then(function(lasCategorias){
            db.Producto.findAll ({
                include: [
                    {association: "categoriaDeEsteProducto"},
                    {association: "imagendeesteproducto"}
                ],
                limit: 4
            })
            .then (function(productos) {
                res.render( 'index',  
                    {
                        productos: productos,
                        lasCategorias: lasCategorias 
                    })            
                // res.send(productos[1].imagendeesteproducto[1].imagenes)
            })
        })
    }
}


module.exports = mainController

// db.Producto.findAll ({
//     include: [
//         {association: "categoriaDeEsteProducto"},
//         {association: "imagendeesteproducto"}
//     ],
//     limit: 4,
//     order: [["updated_at", "ASC"],]
// })
// .then (function(productoNuevo) {
//     res.render( 'index', 
//     {
//         productos: productos
//     },
//     {
//         productoNuevo: productoNuevo 
//     })