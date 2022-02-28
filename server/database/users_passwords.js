var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE users_passwords(id int AUTO_INCREMENT,userID int , password  VARCHAR(255),date_created DATETIME,PRIMARY KEY(id), FOREIGN KEY (userID) REFERENCES users(userID))';
 
 
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });