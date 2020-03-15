const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const CONFIG = require('./src/config/config');
const db = require('./src/config/db.config');
const db_init = require('./init_db/init_db');

// WINSTON LOGGER
const {
  logger,
  expressLogger,
} = require('./src/config/winston.config');

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({
  limit: '10mb',
  extended: true
}));
app.use(cookieParser());
app.use(cors());

// SWAGGER
require('./src/config/swagger.config')(app);
// ROUTES
require('./src/modules/router.modules')(app);

/**
 * @swagger
 * /:
 *  get:
 *    description: Test check api
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome on MSPR API!' })
);

// Log Env
logger.info(`Environment: ${CONFIG.app}`);

//Database init
if (CONFIG.app === 'local') {
  //Create database manually if it doesn't already exists because Sequelize don't handle it.
  db_init.createDbIfNotExists();
  // Sync Database
  db.sequelize.sync({ force: true }).then(function () {
    require('./init_db/init_db_data')(db);
    logger.info('Sync has been established successfully.');
  }).catch(function (err) {
    logger.info('Unable to connect to the database:', err.message);
  });
}

app.listen(CONFIG.port, () => {
  if (CONFIG.app === 'local') {
    logger.info(`MSPR SERVER STARTED ON ${CONFIG.port}`);
  }
});

module.exports = app;