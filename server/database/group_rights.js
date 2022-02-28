var mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
     database: "medstudentlogbook",
  });

db.connect(() => {
    let sql = 'CREATE TABLE group_rights(id int AUTO_INCREMENT,groupID int,rightID int,datetime DATETIME,PRIMARY KEY(id), FOREIGN KEY (groupID) REFERENCES groups(groupID),FOREIGN KEY (rightID) REFERENCES rights(rightID))';
 
 
db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });