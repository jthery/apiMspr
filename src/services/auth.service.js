const userBuilder = require('../builders/user.builder');
const CONFIG = require('../config/config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports.login = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                email,
                pwd
            } = body;

            // vérifie que le nickname est déjà présent en BDD
            if (email.length !== 0 && pwd.length !== 0) {
                // on récupère les identifiants
                const auth = await userBuilder.findUser(email);

                if (auth === null) {
                    return resolve({
                        status: 403
                    });
                }

                // check compare password
                const match = await bcryptjs.compare(pwd, auth.pwd);

                if (match === true) {
                    // Génération du token
                    var newToken = jwt.sign({
                        email
                    }, CONFIG.token_status, {
                        expiresIn: CONFIG.token_expire
                    });
                    
                    return resolve({
                        status: 200,
                        token: newToken
                    });

                } else {
                    return resolve({
                        status: 403
                    });
                }
            } else {
                return resolve({
                    status: 400
                });
            }
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        };
    });
};



module.exports.register = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                nom,
                prenom,
                email,
                pwd
            } = body;

            // Verifie si l'email est déjà utilisé
            const user = await userBuilder.findUser(email);

            if (user !== null && user.email === email) {
                return resolve({
                    status: 403,
                    text: 'Email déjà utilisé'
                });
            }

            // On s'assure qu'aucune entrée ne soit vide
            if (pwd.length === 0 || email.length === 0) {
                return resolve({
                    status: 400
                });
            }

            var salt = bcryptjs.genSaltSync(CONFIG.saltTurns);
            var hashpwd = bcryptjs.hashSync(pwd, salt);

            let createUser = userBuilder.createUser(nom, prenom, email, hashpwd);

            resolve(createUser);

        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};