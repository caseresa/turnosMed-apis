const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',    
    user: 'root',
    password: 'anac',
    database: 'turnosdb',
    multipleStatements: true
}) ;

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else{
        console.log('db esta conectada')
    }
});

module.exports = mysqlConnection;