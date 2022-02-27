var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE stitches(id int AUTO_INCREMENT, unit int,  PRIMARY KEY(id))';
 
 
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });