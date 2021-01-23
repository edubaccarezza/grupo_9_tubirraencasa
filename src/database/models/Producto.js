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
            notNull: true
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true
    }

    const Pelicula = sequelize.define(alias, cols, config)
    return Pelicula
}