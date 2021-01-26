module.exports = function(sequelize, dataTypes) {
    let alias = "Categoria"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: false,
        underscored: true
    }

    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = function( models ) {
        Categoria.hasMany (models.Producto, {
            as: "productosDeEstaCategoria",
            foreignKey: "id_categoria"
        }) 
    }

    return Categoria
}