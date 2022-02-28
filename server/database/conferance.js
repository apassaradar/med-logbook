var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE conferance(id int AUTO_INCREMENT, name_conferance VARCHAR(255),unit int , signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });