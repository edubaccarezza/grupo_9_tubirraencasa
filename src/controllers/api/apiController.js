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
                productosPorCategoria = []
                for (let i = 0; i < categorias.length; i++){
                    productosPorCategoria.push({
                        categoria: categorias[i].nombre,
                        cantidad: categorias[i].productosDeEstaCategoria.length
                    })
                    // productosPorCategoria[categorias[i].nombre] = categorias[i].productosDeEstaCategoria.length
                }
                if(productos.length != 0) {
                    return res.status(200).json({
                        count: productos.length,
                        countByCategory: productosPorCategoria,
                        productos: productos,
                        link: "/api/products",
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
                    link:`/api/products/`
                })
            } else {
                return res.json("No existe este producto")
            }
        })
        .catch(function(error){
            return res.json(error)
        })
    },
    usersAll: function(req,res){
        db.Usuarios.findAll()
        .then(function(todosLosUsuarios){
            let usuarios = [];
            for (let i = 0; i < todosLosUsuarios.length; i++) {
                usuarios.push({
                    id:todosLosUsuarios[i].id,
                    nombre:todosLosUsuarios[i].nombre,
                    apellido:todosLosUsuarios[i].apellido,
                    email:todosLosUsuarios[i].email,
                    link:'api/users/'+todosLosUsuarios[i].id,
                });
                
            }
            return res.status(200).json({
                count: todosLosUsuarios.length,
                usuarios: usuarios,
                link:"/api/users"
            })

        })
    },
    userDetail: function(req,res){
        db.Usuarios.findOne({
            where:{
                id: req.params.id
            }
        })
        .then(function(usuario){
            return res.status(200).json(
                {
                   id: usuario.id,
                   nombre: usuario.nombre,
                   apellido: usuario.apellido,
                   email:usuario.email,
                   detail:usuario.imagen
                }            
            )
        })
    }

}