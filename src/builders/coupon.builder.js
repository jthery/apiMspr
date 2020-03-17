const db = require('../config/db.config');

//Find all coupons
module.exports.findCoupons = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Coupon.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};