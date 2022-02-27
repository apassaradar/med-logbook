var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE users(userID int AUTO_INCREMENT,groupID int, firstname VARCHAR(255), lastname VARCHAR(255), password  VARCHAR(255),date_create DATETIME,PRIMARY KEY(userID), FOREIGN KEY (groupID) REFERENCES groups(groupID))';
 
 
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });