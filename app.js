const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const CONFIG = require('./src/config/config');
const db = require('./src/config/db.config');

// winston logger
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


// check connexion with postman
app.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome on MSPR API!' })
);

// get all roads
require('./src/modules/router.modules')(app);

// Log Env
logger.info(`Environment: ${CONFIG.app}`);

// Sync Database
if (CONFIG.app === 'local') {
  db.sequelize.sync({ force: true }).then(function () {
    require('./init_mspr')(db);
    console.log('Sync has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err.message);
  });
}

app.listen(CONFIG.port, () => {
  if (CONFIG.app === 'local') {
    logger.info(`PVC SERVER STARTED ON ${CONFIG.port}`);
  }
});

module.exports = app;