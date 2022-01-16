import React, { useState } from "react";
import Axios from "axios";
import Datetime from "../../components/Datetime";



const OPD = () => {

    const [opd, setOpd] = useState("");

    const [opdList, setOpdList] = useState([]);

    const getDatas = () => {
        Axios.get("http://localhost:3001/courses/opd").then((response) => {
            setOpdList(response.data);
        });
    };

    const addData = () => {
        Axios.post("http://localhost:3001/courses/opd", {
            opd: opd
        }).then(() => {
            setOpdList([
                ...opdList,
                {
                    opd: opd
                }
            ])
        })
    };

    const deleteData =(id) => {
        Axios.delete(`http://localhost:3001/courses/opd/${id}`).then((response) => {
            setOpdList(
                opdList.filter((val) => {
                    return val.id != id;
                })
            )
        })
    }

    return (
        <div className="container">
            <Datetime className="mb-20" />
            <h1 className="info-name">การเข้าเรียนที่ OPD</h1>
            
            <div className="information">
                <form action="">
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="opd">
                            OPD Unit :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter OPD Unit"
                            onChange={(event) => {
                                setOpd(event.target.value)
                            }}
                        />
                    </div>
                    <button class="btn btn-success" onClick={addData}>Add Data</button>
                </form>
            </div>
            <hr />
            <div className="datas">
                <button class="btn btn-primary" onClick={getDatas}>
                    Show Datas
                </button>
                {opdList.map((val, key) => {
                    return (
                        <div className="data card">
                            <div className="data-card-body text-left">
                                <p className="data-card-text">OPD Unit : {val.opd}</p>
                                <button btn btn-danger onClick={() => {deleteData(val.id)}}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OPD;
