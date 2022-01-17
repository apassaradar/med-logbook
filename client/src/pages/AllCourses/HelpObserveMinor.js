import React, { useState } from "react";
import Axios from "axios";
import Datetime from "../../components/Datetime";

const HelpObserveMinor = () => {
  const [hn, setHn] = useState("");
  const [patient_name, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [ward, setWard] = useState("");
  const [unit, setUnit] = useState("");

  const [helpobserveminorList, setHelpObserveMinorList] = useState([]);

  const getDatas = () => {
    Axios.get("http://localhost:3001/courses/helpobserveminor").then(
      (response) => {
        setHelpObserveMinorList(response.data);
      }
    );
  };

  const addData = () => {
    Axios.post("http://localhost:3001/courses/helpobserveminor", {
      hn: hn,
      patient_name: patient_name,
      diagnosis: diagnosis,
      ward: ward,
      unit: unit,
    }).then(() => {
      setHelpObserveMinorList([
        ...helpobserveminorList,
        {
          hn: hn,
          patient_name: patient_name,
          diagnosis: diagnosis,
          ward: ward,
          unit: unit,
        },
      ]);
    });
  };

  const deleteData = (id) => {
    Axios.delete(`http://localhost:3001/courses/helpobserveminor/${id}`).then(
      (response) => {
        setHelpObserveMinorList(
          helpobserveminorList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };

  return (
    <div className="container">
      <Datetime className="mb-20" />
      <h1 className="info-name">
        รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก
      </h1>
      <div className="info-detail">อย่างน้อย 2 ราย (ไม่รวมเย็บแผล)</div>
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
                setHn(event.target.value);
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
                setPatientName(event.target.value);
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
                setDiagnosis(event.target.value);
              }}
            />
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
                setWard(event.target.value);
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
                setUnit(event.target.value);
              }}
            />
          </div>
          <button class="btn btn-success" onClick={addData}>
            Add Data
          </button>
        </form>
      </div>
      <hr />
      <div className="datas">
        <button class="btn btn-primary" onClick={getDatas}>
          Show Datas
        </button>
        {helpobserveminorList.map((val, key) => {
          return (
            <div className="data card">
              <div className="data-card-body text-left">
                <p className="data-card-text">HN. : {val.hn}</p>
                <p className="data-card-text">
                  ชื่อผู้ป่วย : {val.patient_name}
                </p>
                <p className="data-card-text">Diagnosis : {val.diagnosis}</p>
                <p className="data-card-text">Ward : {val.ward}</p>
                <p className="data-card-text">Unit : {val.unit}</p>
                <button
                  btn
                  btn-danger
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

export default HelpObserveMinor;
