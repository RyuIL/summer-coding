const mysql = require('mysql');

const passwd = process.env.mysqlPassword || 4000;

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : passwd,
    port : 3306,
    database : 'node_api_codelab'
});

module.exports = connection;