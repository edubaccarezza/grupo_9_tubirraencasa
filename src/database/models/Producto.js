module.exports = function(sequelize, dataTypes) {
    let alias = "Producto"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },
        // created_at: {
        //     type: dataTypes.TIMESTAMPS,
        //     notNull: false
        // },
        // updated_at: {
        //     type: dataTypes.TIMESTAMPS,
        //     notNull: false
        // },
        marca: {
            type: dataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            notNull: true
        },
        precio: {
            type: dataTypes.FLOAT,
            notNull: true
        },
        stock: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        id_categoria: {
            type: dataTypes.INTEGER,
            notNull: true,
            foreignKey: true
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function( models ) {
        Producto.belongsTo (models.Categoria, {
            as: "categoriaDeEsteProducto",
            foreignKey: "id_categoria"
        }),
        Producto.hasMany (models.Imagen, {
            as: "imagendeesteproducto",
            foreignKey: "id_productos"
        })
    }


    return Producto
}