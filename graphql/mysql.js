const mysql = require('mysql');
const pify = require('util').promisify;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'Test_User'
});

connection.connect(function(err) {
    if (err) {
        console.error('error: ' + err.stack);
        return;
    }
});

Object.defineProperty(connection, 'pifySelect', {
    value: function(sql) {
        // console.log('mysqlCon=>', pify(mysqlCon.query)('SELECT * from  Tab_User_Info'));
        return new Promise((resolve, _)=>{
            connection.query(sql, function (error, results) {
                if (error) console.log('mysql select err:', error);
                resolve(results);
            }); 
        })
    }
})

module.exports = connection
