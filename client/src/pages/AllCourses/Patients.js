import React, { useState } from "react";
import Axios from "axios";
import Clock from "../../components/Datetime";



const Patients = () => {

    const [hn, setHn] = useState("");
    const [patient_name, setPatientName] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [ward, setWard] = useState("");
    const [unit, setUnit] = useState("");

    const [patientList, setPatientList] = useState([]);

    const getData = () => {
        Axios.get("http://localhost:3001/courses/patients").then((response) => {
            setPatientList(response.data);
        });
    };

    const addData = () => {
        Axios.post("http://localhost:3001/courses/patients", {
            hn: hn,
            patient_name: patient_name,
            diagnosis: diagnosis,
            ward: ward,
            unit: unit
        }).then(() => {
            setPatientList([
                ...patientList,
                {
                    hn: hn,
                    patient_name: patient_name,
                    diagnosis: diagnosis,
                    ward: ward,
                    unit: unit
                }
            ])
        })
    };

    const deleteData =(id) => {
        Axios.delete(`http://localhost:3001/courses/patients/${id}`).then((response) => {
            setPatientList(
                patientList.filter((val) => {
                    return val.id != id;
                })
            )
        })
    }

    return (
        <div className="container">
            <Clock />
            
            <h1 className="info-name">รายชื่อผู้ป่วยที่ได้รับไว้ในความดูแล</h1>
            <div className="info-detail">หน่วยละ 2 ราย</div>
            <button class="btn btn-success" onClick={addData}>Add Data</button>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="hn">
                            HN. :
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter HN."
                            onChange={(event) => {
                                setHn(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="patient_name">
                            ชื่อผู้ป่วย :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            onChange={(event) => {
                                setPatientName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="diagnosis">
                            Diagnosis :
                        </label>
                        <textarea
                            type="text"
                            row="5"
                            className="form-control"
                            onChange={(event) => {
                                setDiagnosis(event.target.value)
                            }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="ward">
                            Ward :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Ward"
                            onChange={(event) => {
                                setWard(event.target.value)
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
                    
                </form>
            </div>
            <hr />
            <div className="data">
                <button class="btn btn-primary" onClick={getData}>
                    Show Data
                </button>
                {patientList.map((val, key) => {
                    return (
                        <div className="data-card">
                            <div className="data-card-body">
                                <p className="data-card-text">HN. : {val.hn}</p>
                                <p className="data-card-text">ชื่อผู้ป่วย : {val.patient_name}</p>
                                <p className="data-card-text">Diagnosis : {val.diagnosis}</p>
                                <p className="data-card-text">Ward : {val.ward}</p>
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

export default Patients;
