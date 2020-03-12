const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const CONFIG = require('./src/config/config');


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

app.listen(CONFIG.port, () => {
  if (CONFIG.app === 'local') {
    console.log(`SERVER ON ${CONFIG.port}`);
  }
});

module.exports = app;