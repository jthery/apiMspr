// Express router
const express = require('express');
const router = express.Router();

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

/**
 * @swagger
 *
 * /api/coupon:
 *   post:
 *     description: add coupon to user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id user to add for a coupon.
 *         in: formData
 *         required: true
 *         type: number
 *       - name: couponId
 *         description: add coupon id.
 *         in: formData
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: add coupon to user has been established successfully
 */
router.post('/coupon', CouponController.coupon);

// Export routes
module.exports = router;