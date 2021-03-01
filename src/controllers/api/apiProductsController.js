const db = require('../../database/models/index')

module.exports = {
    productsAll: function (req, res) {
        db.Categoria.findAll ({
            include: [
                {association: "productosDeEstaCategoria"},
            ]
        })
        .then(function(categorias) {
            db.Producto.findAll ({
                include: [
                    {association: "categoriaDeEsteProducto"},
                    {association: "imagendeesteproducto"}
                ]
            })
            .then(function(productos) {
                productosPorCategoria = {}
                for (let i = 0; i < categorias.length; i++){
                    productosPorCategoria[categorias[i].nombre] = categorias[i].productosDeEstaCategoria.length
                }
                if(productos.length != 0) {
                    return res.status(200).json({
                        count: productos.length,
                        countByCategory: productosPorCategoria,
                        productos: productos,
                        link:"/api/products",
                    })
                } else {
                    return res.json()
                }
            })             
            .catch(function(error){
                return res.json(error)
            })
        })
    },
    productDetail: function(req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "categoriaDeEsteProducto"},
                {association: "imagendeesteproducto"}
            ]
        })
        .then (function(unProducto) {
            if(unProducto != null) {
                return res.status(200).json({
                    unProducto: unProducto,
                    link:`/api/products/${unProducto.id}`
                })
            } else {
                return res.json("No existe este producto")
            }
        })
        .catch(function(error){
            return res.json(error)
        })
    }
}