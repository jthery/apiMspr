// Express router
var express = require('express');
var router = express.Router();

// Controller declaration
const CouponController = require('../controllers/coupon.controller.js');

/**
 * @swagger
 * /api/coupons:
 *   get:
 *     description: Returns coupons
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: coupons
 */ 
router.get('/coupons', CouponController.getCoupons);

// Export routes
module.exports = router;