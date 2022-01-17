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
   database: "medstudentlogbook",
});
// connect 
db.connect((err) => {
  if(err){
  throw err;
  }
  console.log('MySql Connected ....');
  
  });
  app.get('/courses/createDb', (req, res) => {
    let sql = 'CREATE DATABASE medstudentlogbook';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
  });

  // create DB 
app.get('/courses/createconferance', (req, res) => {
  let sql = 'CREATE TABLE conferance(id int AUTO_INCREMENT, name_conferance VARCHAR(255),unit int , signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
  db.query(sql, (err, result) => {
       if(err) throw err;
       console.log(result);
       res.send('Posts table created...');
  });
});

app.get('/courses/createcvp', (req, res) => {
  let sql = 'CREATE TABLE cvp(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,unit int,ward int,diagnosis VARCHAR(255),manager VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createemergency', (req, res) => {
  let sql = 'CREATE TABLE emergency(id int AUTO_INCREMENT, number int,diagnosis VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createfirstaid', (req, res) => {
  let sql = 'CREATE TABLE firstaid(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),procedures VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createfoleycath', (req, res) => {
  let sql = 'CREATE TABLE foleycath(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,ward int,diagnosis VARCHAR(255),manager VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});


app.get('/courses/createhelpmajor', (req, res) => {
  let sql = 'CREATE TABLE helpmajor(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),procedures VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createhelpobserveminor', (req, res) => {
  let sql = 'CREATE TABLE helpobserveminor(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),procedures VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createobservemajor', (req, res) => {
  let sql = 'CREATE TABLE observemajor(id int AUTO_INCREMENT,  patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),procedures VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createopd', (req, res) => {
  let sql = 'CREATE TABLE opd(id int AUTO_INCREMENT,week int,topic VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});
app.get('/courses/createpatient', (req, res) => {
  let sql = 'CREATE TABLE patient(id int AUTO_INCREMENT, week int, patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),ward int,unit int,datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createresident', (req, res) => {
  let sql = 'CREATE TABLE resident(id int AUTO_INCREMENT,week int,topic VARCHAR(255),signature VARCHAR(255),datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});

app.get('/courses/createstitches', (req, res) => {
  let sql = 'CREATE TABLE stitches(id int AUTO_INCREMENT, week int, patient_name VARCHAR(255),hn int,diagnosis VARCHAR(255),ward int,unit int,datetime DATETIME, PRIMARY KEY(id))';
 
db.query(sql, (err, result) => {
     if(err) throw err;
     console.log(result);
     res.send('Posts table created...');
});
});



// app.post("/users", (req, res) => {

//     const username = req.body.username;
//     const password = req.body.password;

//     db.query(
//         "INSERT INTO accounts (username, password) VALUES (?,?)",
//         [username, password],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

///create table 




app.get("/courses/patients", (req, res) => {
  db.query("SELECT * FROM patients", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/courses/patients", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO patients (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
    [hn, patient_name, diagnosis, ward, unit], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/courses/patients/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM patients WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
})

app.get('/courses/opd',(req, res) => {
    db.query(
        "SELECT * FROM opd", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/courses/opd", (req, res) => {

    const opd = req.body.opd;

    db.query(
        "INSERT INTO opd (opd) VALUES (?)",
        [opd], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.delete("/courses/opd/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM opd WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
})

app.get('/courses/conference',(req, res) => {
    db.query(
        "SELECT * FROM conference", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/courses/conference", (req, res) => {

    const conference_name = req.body.conference_name;
    const unit = req.body.unit;

    db.query(
        "INSERT INTO conference (conference_name, unit) VALUES (?,?)",
        [conference_name, unit],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.delete("/courses/conference/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM conference WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
})

app.get('/courses/emergency',(req, res) => {
    db.query(
        "SELECT * FROM emergency", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/courses/emergency", (req, res) => {

    const experience = req.body.experience;

    db.query(
        "INSERT INTO emergency (experience) VALUES (?)",
        [experience],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.delete("/courses/emergency/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM emergency WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
})

app.get("/courses/observemajor", (req, res) => {
  db.query("SELECT * FROM observemajor", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/courses/observemajor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO observemajor (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
    [hn, patient_name, diagnosis, ward, unit], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/courses/observemajor/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM observemajor WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
})
// app.get('/courses/helpmajor',(req, res) => {
//     db.query(
//         "SELECT * FROM helpmajor", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/helpmajor", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO helpmajor (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/helpobserveminor',(req, res) => {
//     db.query(
//         "SELECT * FROM helpobserveminor", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/helpobserveminor", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO helpobserveminor (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/firstaid',(req, res) => {
//     db.query(
//         "SELECT * FROM firstaid", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/firstaid", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO firstaid (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/stitches',(req, res) => {
//     db.query(
//         "SELECT * FROM stitches", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/stitches", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO stitches (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/foleycath',(req, res) => {
//     db.query(
//         "SELECT * FROM foleycath", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/foleycath", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO foleycath (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/cvp',(req, res) => {
//     db.query(
//         "SELECT * FROM cvp", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/cvp", (req, res) => {

//     const hn = req.body.hn;
//     const patient_name = req.body.patient_name;
//     const diagnosis = req.body.diagnosis;
//     const ward = req.body.ward;
//     const unit = req.body.unit;

//     db.query(
//         "INSERT INTO cvp (hn, patient_name, diagnosis, ward, unit) VALUES (?,?,?,?,?)",
//         [hn, patient_name, diagnosis, ward, unit],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.get('/courses/resident',(req, res) => {
//     db.query(
//         "SELECT * FROM resident", (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

// app.post("/courses/resident", (req, res) => {

//     const resident = req.body.resident;

//     db.query(
//         "INSERT INTO resident (resident VALUES (?)",
//         [resident],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
