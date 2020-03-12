const couponService = require('../services/coupon.service');

exports.getCoupons = async (req, res) => {
    try {
        let data = await couponService.getCoupons(req.body);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err).send(err.message);
    }
};