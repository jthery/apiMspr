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
            console.log(body, 'rentre dans le service');
            const {
                userId,
                couponId
            } = body;

            const coupon = couponBuilder.coupon(userId, couponId);

            console.log(coupon, 'on réceptionne le body, fin du service');

            resolve(coupon);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};