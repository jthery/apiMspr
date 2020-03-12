const auth = require('../routes/auth.route');

module.exports = app => {
    console.log('ROUTER MODULE STARTED');

    //AUTHENTIFICATION
    app.use('/api', auth);

};