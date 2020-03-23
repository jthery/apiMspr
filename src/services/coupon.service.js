const couponBuilder = require('../builders/coupon.builder');

module.exports.getCoupons = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const coupons = await couponBuilder.findCoupons();
            resolve(coupons);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.coupon = (body) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                userId,
                couponId
            } = body;

            const coupon = couponBuilder.coupon(userId, couponId);
            
            resolve(coupon);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};