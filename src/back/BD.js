const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "krlast"
});

conn.connect(function (err){
    if (err) throw err;
    console.log("Database ------ OK");
});

/*conn.query("SELECT * FROM tovars", function (err, result){
    if (err) throw err;
    console.log(result);
});*/

conn.end(function (err){
    if (err) throw err;
    console.log("Database ------ CLOSE");
});