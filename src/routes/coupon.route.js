// Express router
var express = require('express');
var router = express.Router();

// Controller declaration
const CouponController = require('../controllers/coupon.controller.js');

//GET COUPONS : Crud method, route and controller function 
router.get('/coupons', CouponController.getCoupons);

// Export routes
module.exports = router;