var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
  
let sql = 'CREATE TABLE conferance(id int AUTO_INCREMENT,courseID int,userID int,name_conferance VARCHAR(255),unitID int ,signature VARCHAR(255),created_at DATETIME,update_at DATETIME, PRIMARY KEY(id),FOREIGN KEY (userID) REFERENCES users(userID), FOREIGN KEY (unitID) REFERENCES unit(unitID), FOREIGN KEY (courseID) REFERENCES course(courseID))';
     db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });