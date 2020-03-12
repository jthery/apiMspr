const sequelize = require('../models').sequelize;
const User = require('../models').user;
const Coupon = require('../models').coupon;

const models = {
  User,
  Coupon
};

const db = {
  models,
  sequelize
};

module.exports = db;