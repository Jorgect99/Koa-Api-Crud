module.exports = (sequelize, type) => {
    return sequelize.define('Users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        password: {
            type: type.STRING(150),
        }
    })
};
