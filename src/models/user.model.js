module.exports = (sequelizeModels, Sequelize) => {
    const user = sequelizeModels.define(
        'user', {
            userId: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true
            },
            nom: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            prenom: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(255),
                unique: true
            },
            pwd: {
                allowNull: false,
                type: Sequelize.STRING(255)
            }
        }, {
            tableName: 'user',
            timestamps: false,
            freezeTableName: true,
        }
    );

    user.associate = function (models) {
        user.belongsToMany(models.coupon, {
            through: 'user_coupon',
            foreignKey: 'USER_id',
            timestamps: false
        });
    };
    
    return user;
};