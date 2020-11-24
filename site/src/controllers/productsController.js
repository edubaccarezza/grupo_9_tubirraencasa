const fs = require('fs')
const path = require('path')

module.exports = {
    all: function(req, res) {

        let products = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
        let arrayProducts = JSON.parse(products)
        return res.render('productos', {productosEnLaVista: arrayProducts})
       
    }
}