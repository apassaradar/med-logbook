var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
  let sql = 'CREATE TABLE cvp(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,unit int,ward int,diagnosis VARCHAR(255),manager VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });