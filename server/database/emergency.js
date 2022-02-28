var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
   let sql = 'CREATE TABLE emergency(id int AUTO_INCREMENT, number int,diagnosis VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });