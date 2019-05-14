var express = require('express');
var router = express.Router();
const connection = require('./mysql');
var mysqlDB = require('./mysql');

router.get('/', function (req, res, next) {
    connection.connect();
    mysqlDB.query('select * from Persons', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;

