var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE patient(id int AUTO_INCREMENT, week int, patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),ward int,unit int,datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });