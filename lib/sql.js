let mysql = require('mysql');

let options = {
    host:'localhost',
    port:3306,
    user:"root",
    password:'',
    database:'express'
}
let pool = mysql.createPool(options);



function query(str, callback) {
    pool.getConnection(function (err,con) {
         if(err) {
             callback(err,null);
             return;
         }
         con.query(str,function (err, res) {
             if(err){
                 callback(err,null);
                 return;
             }
             callback(null,res);
             con.release();
         })
    })
}

module.exports=query;