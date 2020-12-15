const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
productos = JSON.parse(productos)

let ultimoId = 0;
for (let i = 0; i < productos.length; i++) {
    if (ultimoId < productos[i].id) {
        ultimoId = productos[i].id
    }
}

module.exports = {
    root: function(req, res) {
        return res.render('products/index', { productos });   
    },
    detail: function(req, res) {
        let producto = productos.find((producto) => {
            return producto.id == req.params.id;
        })
        return res.send(producto);  
    },
    create: function(req,res) {
        return res.render('products/create')
    },
    store: function(req,res,next) {
        // return console.log(req.files[0])
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = {
                id: ultimoId + 1,
                code: req.body.code,
                name: req.body.name,
                category: req.body.category,
                image: req.files[0].filename,
                price: req.body.price,
                description: req.body.description
            }
            productos.push(product);
            fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(productos, null, 4))
        }
        return res.send("products/index");
    },
    adminDetail: (req, res) => {
        let producto = productos.find((producto) => {
            return producto.id == req.params.id;
        })
        return res.render('products/edit', {producto});
    }  
}