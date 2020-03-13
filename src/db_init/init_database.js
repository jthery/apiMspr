const mysql2 = require('mysql2');
const CONFIG = require('../config/config');

//Create db if not exists
const name = CONFIG.db_name;

let mysqlCon = mysql2.createConnection({
    host: CONFIG.db_host,
    user: CONFIG.db_user,
    port: CONFIG.db_port,
    password: CONFIG.db_password
});

module.exports.createDbIfNotExists = () => {
    mysqlCon.connect(function (err) {
        mysqlCon.query("CREATE DATABASE IF NOT EXISTS " + name + ";");
    });
}



