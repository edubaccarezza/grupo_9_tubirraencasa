const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require('../database/models')

// let productos = fs.readFileSync(path.join(__dirname, '../database/products.json'), 'utf8');
// productos = JSON.parse(productos)

// let ultimoId = 0;
// for (let i = 0; i < productos.length; i++) {
//     if (ultimoId < productos[i].id) {
//         ultimoId = productos[i].id
//     }
// }

module.exports = {
    //product.js
    root: function(req, res) {       
        db.Producto.findAll ({
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ]
        })
        .then (function(productos) {
            res.render( 'products/index', {
                productos: productos 
            })
        })
    },
    detail: function(req, res) {
        // db.sequelize.query('SELECT * FROM productos WHERE id = ' + req.params.id)
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ]
        })
        .then (function(unProducto) {
            // res.send(unProducto.imagendeesteproducto[0].imagenes)
            res.render('products/detailUser', {
                unProducto: unProducto
            })
        })
    }, 
    cart: (req,res) => {
        return res.render('products/productCart');
    },
    search: function(req,res) {
        // req.query.search
        // db.sequelize.query(`SELECT * FROM productos WHERE title LIKE '%${req.query.search}%'`)
        db.Producto.findAll({
            where: {
                nombre: {
                    [db.Sequelize.Op.like]: `%${req.query.search}%`
                }
            }
        })
        .then(function(resultado) {
            res.render('products/search', {
                queryString: req.query.search,
                productos: resultado
            })
        })
        .catch(function(e) {
            res.send(e)
        })
    },

    //admin.js
    all: function(req, res) {       
        db.Producto.findAll ()
        .then (function(productos) {
            res.render( 'products/index', {
                productos: productos 
            })
        })
    },
    adminDetail: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ]
        })
        .then (function(unProducto) {
            res.render('products/detailAdmin', {
                unProducto: unProducto
            })
        })
    },
    create: function(req,res) {
        return res.render('products/create')
    }, 
    store: function(req,res,next) {
        // res.send(req.body)
        db.Producto.create ({
            nombre: req.body.nombre,
            marca: req.body.marca,
            imagen: req.files[0],
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            id_categoria:req.body.id_categoria
        }) 
        .then (function(productoNuevo) {
            res.redirect('/products/' + productoNuevo.id)
        })
    }, 
    edit: function (req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function(elProducto) {
            res.render('products/edit', {
                elProducto: elProducto
            })
        })
    },
    restore: function(req, res) {
        db.Producto.update ({
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            id_categoria: req.body.id_categoria 
        }, {
            where: {
                id: req.params.id
            }
        }) 
        .then (function(productoEditado) {
            if(productoEditado[0] == 1) {
                res.redirect('/products/' + req.params.id)
            } else {
                res.send("No pudimos editar el producto")
            }
        })
    },
    delete: function(req, res) {
        db.Producto.destroy ({
            where: {
                id: req.params.id
            }
        })
        .then (function() {
            res.render('products/delete')
        })
    }
} 