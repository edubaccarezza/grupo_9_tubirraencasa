module.exports = function(sequelize, dataTypes) {
    let alias = "Imagen"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_productos: {
            type: dataTypes.INTEGER,
            notNull: true,
            foreignKey: true
        },
        imagenes: {
            type: dataTypes.STRING,
            notNull: true
        }
    }
    let config = {
        tableName: 'imagenes',
        timestamps: false,
        underscored: true
    }

    const Imagen = sequelize.define(alias, cols, config)

    Imagen.associate = function( models ) {
        Imagen.belongsTo (models.Producto, {
            as: "productodeestaimagen",
            foreignKey: "id_productos"
        }) 
    }

    return Imagen
}