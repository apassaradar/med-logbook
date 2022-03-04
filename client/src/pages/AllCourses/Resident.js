import React, { useState } from "react";
import Axios from "axios";


const Resident = () => {

    const [subject, setSubject] = useState("");

    const [residentList, setResidentList] = useState([]);

    const getData = () => {
        Axios.get("http://localhost:3001/courses/resident").then((response) => {
          setResidentList(response.data);
        });
      };


      const addData = () => {
        Axios.post("http://localhost:3001/courses/resident", {
          subject: subject
        }).then(() => {
          setResidentList([
            ...residentList,
            {
              subject: subject
            },
          ]);
        });
      };
    
      const deleteData = (id) => {
        Axios.delete(`http://localhost:3001/courses/resident/${id}`).then((response) => {
          setResidentList(
            residentList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

      
    return (
        <div className="container">
            <h1 className='info-name'>การสอนของ Resident</h1>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="subject">เรื่องที่สอน :</label>
                        <textarea
                            type="text"
                            row="2"
                            className="form-control"
                            onChange={(event) => {
                                setSubject(event.target.value);
                              }}
                        />
                    </div>
                    <button class="btn btn-success" onClick={addData}>
                        Add Data
                    </button>
                </form>
            </div>
            <hr />
            <div className="data">
                <button class="btn btn-primary" onClick={getData}>
                    Show Data
                </button>
                {residentList.map((val, key) => {
          return (
            <div className="data-card">
              <div className="data-card-body text-left">
                <p className="data-card-text">
                  เรื่องที่สอน : {val.subject}
                </p> 
                <button className="data-card-btn btn-danger"
                  onClick={() => {
                    deleteData(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
            </div>
        </div>

    );
};

export default Resident;