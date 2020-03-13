module.exports = function (db) {
    initUser();
    initCoupon();

    function initUser() {
        const bcrypt = require('bcryptjs');
        const salt = bcrypt.genSaltSync(5);
        const sullivanMdp = bcrypt.hashSync('sullivan', salt);
        const justineMdp = bcrypt.hashSync('justine', salt);
        const jeremyMdp = bcrypt.hashSync('jeremy', salt);

        userList = [
            { nom: 'Delaby', prenom: 'Sullivan', email: 'sullivan.delaby@epsi.fr', pwd: sullivanMdp },
            { nom: 'Moreau', prenom: 'Justine', email: 'justine.moreau@epsi.fr', pwd: justineMdp},
            { nom: 'Thery', prenom: 'Jeremy', email: 'jeremy.thery@epsi.fr', pwd: jeremyMdp}
        ]
        db.models.User.bulkCreate(userList);
    }

    function initCoupon() {

        couponList = [
            { discount: 30, description: '30% de réduction', date_debut: '2020-03-12', date_fin: '2020-08-12' },
            { discount: 40, description: '40% de réduction', date_debut: '2020-08-12', date_fin: '2020-12-12' },
            { discount: 50, description: '50% de réduction', date_debut: '2020-02-12', date_fin: '2021-02-12' },
        ]
        db.models.Coupon.bulkCreate(couponList);
    }

}