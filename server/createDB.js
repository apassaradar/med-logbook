const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
// database: "medstudentlogbook", //run node createDB.js
});
// connect 
db.connect((err) => {
  if(err){
  throw err;
  }
  console.log('MySql Connected ....');
  
  });
  db.connect(() => {
    let sql = 'CREATE DATABASE medstudentlogbook';
    
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  
  });