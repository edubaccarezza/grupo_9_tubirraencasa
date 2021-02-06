const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require('../database/models')


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
                productos: productos,
                title: "Tu Birra"
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
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ],
            where: {
                nombre: {
                    [db.Sequelize.Op.like]: `%${req.query.search}%`
                }
            }
        })
        .then(function(resultado) {
            // res.send(resultado[0].imagendeesteproducto[0].imagenes)
            res.render('products/search', {
                queryString: req.query.search,
                resultado: resultado,
            })
        })
        .catch(function(e) {
            res.send(e)
        })
    },

    //admin.js
    all: function(req, res) {       
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
    store: async (req,res,next)  => {
        // res.send(req.files)
        let errors = validationResult(req)
        // if ( req.files.length > 5 ) {
        //     errors.errors.push('No puedes subir más de 5 imágenes')
        // }
        if ( errors.isEmpty() ) {
        let producto = await db.Producto.create(
            {... req.body},
            {
                include: [
                    {association: "categoriaDeEsteProducto"},
                    {association: "imagendeesteproducto"}                    
                ]
            })
        let data = []
        let id = producto.id
        for ( let imagen of req.files ) {
            let newData = {
                id_productos: id,
                imagenes: imagen.filename
            }
            data.push(newData)
        }        
        let carga = await db.Imagen.bulkCreate(data)
        res.redirect('/products/' + id)
    } else {
        // res.send (errors.mapped())
        return res.render('products/create', {
            errors: errors.mapped()
        })
    }

    }, 
    edit: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ]
        })
        .then(function(elProducto) {
            // res.send(elProducto.categoriaDeEsteProducto[0].nombre)

            res.render('products/edit', {
                elProducto: elProducto
            })
        })
    },
    restore: function(req, res) {
        let errors = validationResult(req)
        if ( errors.isEmpty() ) {
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
        } else {
            // res.send (errors.mapped())
            db.Producto.findByPk(req.params.id, {
                include: [
                    {association: "categoriaDeEsteProducto"},
                    {association: "imagendeesteproducto"}
                ]
            })
            .then(function(elProducto) {
                // res.send(elProducto.categoriaDeEsteProducto[0].nombre)
    
                res.render('products/edit', {
                    elProducto: elProducto,
                    errors: errors.mapped()
                })
            })
        }
    },
    delete: function (req, res) {
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