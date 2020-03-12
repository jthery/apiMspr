module.exports = (sequelizeModels, Sequelize) => {
    const coupon = sequelizeModels.define(
        'coupon', {
            couponId: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            discount: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            decsription: {
                type: Sequelize.STRING(255)
            },
            date_debut: {
                type: Sequelize.DATE
            },
            date_fin: {
                type: Sequelize.DATE
            }
        }, {
            tableName: "coupon",
            timestamps: false,
            freezeTableName: true,
        }
    );

    coupon.associate = function (models) {
        coupon.belongsToMany(models.user, {
            through: 'user_coupon',
            foreignKey: 'COUPON_id',
            timestamps: false
        });
    };

    return coupon;
};