const fs = require('fs')
const path = require('path')

module.exports = {
    all: function(req, res) {

        let products = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
        let arrayProducts = JSON.parse(products)
        return res.render('products/productos', {productosEnLaVista: arrayProducts})
       
    },
    productCart: function (req,res) {
        return res.render('products/productCart');
    },
    productos: function (req,res) {
        return res.render('products/productos');
    },
    crear: function(req,res) {
        return res.render('products/crear')
    }
}