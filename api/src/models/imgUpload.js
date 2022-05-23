module.exports = (sequelize, DataTypes) => {
    return sequelize.define('imgUpload', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {})
}

