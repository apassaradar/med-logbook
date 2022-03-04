import React, { useState } from "react";
import Axios from "axios";



const Conference = () => {

    const [conference_name, setConferenceName] = useState("");
    const [unit, setUnit] = useState("");

    const [conferenceList, setConferenceList] = useState([]);

    const getData = () => {
        Axios.get("http://localhost:3001/courses/conference").then((response) => {
            setConferenceList(response.data);
        });
    };

    const addData = () => {
        Axios.post("http://localhost:3001/courses/conference", {
            conference_name: conference_name,
            unit: unit
        }).then(() => {
            setConferenceList([
                ...conferenceList,
                {
                    conference_name: conference_name,
                    unit: unit
                }
            ])
        })
    };

    const deleteData =(id) => {
        Axios.delete(`http://localhost:3001/courses/conference/${id}`).then((response) => {
            setConferenceList(
                conferenceList.filter((val) => {
                    return val.id != id;
                })
            )
        })
    }

    return (
        <div className="container">
            <h1 className="info-name">การเข้าร่วม Conference ของหน่วย</h1>
            <div className="information">
                <form action=""> 
                    <div className="mb-3">
                        <label className="form-label" htmlFor="conference_name">
                            ชื่อ Conference :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            onChange={(event) => {
                                setConferenceName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="unit">
                            Unit :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Unit"
                            onChange={(event) => {
                                setUnit(event.target.value)
                            }}
                        />
                    </div>
                    <button class="btn btn-success" onClick={addData}>Add Data</button>
                </form>
            </div>
            <hr />
            <div className="data">
                <button class="btn btn-primary" onClick={getData}>
                    Show Data
                </button>
                {conferenceList.map((val, key) => {
                    return (
                        <div className="data-card">
                            <div className="data-card-body text-left">
                                <p className="data-card-text">ชื่อ Conference : {val.conference_name}</p>
                                <p className="data-card-text">Unit : {val.unit}</p>
                                <button className="data-card-btn btn-danger" onClick={() => {deleteData(val.id)}}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Conference;
