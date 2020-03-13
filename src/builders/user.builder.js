const db = require('../config/db.config');

//Find user by email
module.exports.findUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = db.models.User.findOne({
        where: {
            email: email
        }
      });
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};


// Create a new user in the database : 
module.exports.createUser = async (nom, prenom, email, pwd) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await db.models.User.create({
        nom: nom,
        prenom: prenom,
        email: email,
        pwd: pwd
      });
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};
