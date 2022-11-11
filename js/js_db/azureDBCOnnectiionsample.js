/* 
    Node.jsによるAzure DBアクセス
*/

console.log("     PGM START     ")

var Connection = require('tedious').Connection;  
var config = {  
    server: 'mysqlserver1110.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sqlAppledysha271', //update me
            password: 'db2admin1234!"#$'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'KumoDB01'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();

console.log(10)
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  
console.log(20)
executeStatement();

function executeStatement() {  
    request = new Request("SELECT * FROM [SalesLT].[Product] order by 1,2,3;", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    console.log(30)
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
}  