const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
var mongoose = require('mongoose');
var morgan = require('morgan');
// const autoIncrement = require('mongoose-auto-increment');

require('dotenv').config();

const app = express();
const PORT = process.env.nodePORT;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.mongoGCPConnection,{ useNewUrlParser: true })
  .then(() => console.log('connected succesful'))
  .catch((err) => console.error(err));

// autoIncrement.initialize(mongoose.connection);

  
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(bodyParser.json({limit : '1mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todos", require('./api/todos'))

app.listen(process.env.nodePORT, (err) => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
