module.exports = function (sequelize,dataTypes){
    let alias = 'Usuarios';
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
        apellido: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        imagen: {
            type: dataTypes.STRING,
            notNull: true
        },
        admin: {
            type: dataTypes.BOOLEAN,
            notNull: true
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false,
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;

}