module.exports = (sequelize, type) => {
    return sequelize.define('Products', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        price: {
            type: type.DECIMAL,
            allowNull: false,
        }
    })
};
