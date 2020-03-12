const auth = require('../routes/auth.route');
const coupon = require('../routes/coupon.route');

// GESTION DES ROUTES PRINCIPALES
module.exports = app => {

    //AUTHENTIFICATION
    app.use('/api', auth);

    // COUPON
    app.use('/api', coupon);

};