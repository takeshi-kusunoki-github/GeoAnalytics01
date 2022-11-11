console.log("DB TEST start 10")

// requireの設定
const mysql = require('mysql');

// MySQLとのコネクションの作成
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'takeshi',
    password :'AppleH@iku1027',
	database: 'world'
});

console.log("DB TEST start 20")
// 接続
connection.connect();

console.log("DB TEST start 30")
// userdataの取得
connection.query('SELECT * from city;', function (err, rows, fields) {
	if (err) { console.log('err: ' + err); } 

	console.log( rows[0].Name);
	console.log( rows[0].CountryCode);

});

console.log("DB TEST start 40")
// 接続終了
connection.end();