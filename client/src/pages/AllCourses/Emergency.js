import React, { useState } from "react";
import Axios from "axios";
import Datetime from "../../components/Datetime";



const Emergency = () => {
  
    const [experience, setExperience] = useState("");

    const [emergencyList, setEmergencyList] = useState([]);

    const getDatas = () => {
        Axios.get("http://localhost:3001/courses/emergency").then((response) => {
            setEmergencyList(response.data);
        });
    };

    const addData = () => {
        Axios.post("http://localhost:3001/courses/emergency", {
            experience: experience

        }).then(() => {
            setEmergencyList([
                ...emergencyList,
                {
                    experience: experience
                   
                }
            ])
        })
    };

    const deleteData =(id) => {
        Axios.delete(`http://localhost:3001/courses/emergency/${id}`).then((response) => {
            setEmergencyList(
                emergencyList.filter((val) => {
                    return val.id != id;
                })
            )
        })
    }
  
    return (
    <div className="container">
        <Datetime className="datetime" />
        <h1 className='info-name'>การอยู่เวรห้องฉุกเฉิน 19.00 - 22.00</h1>
        <div className="information">
            <form action="">
                <div className="mb-3">
                    <label className="form-label" htmlFor="experience">วินิจฉัย หรือประสบการณ์ที่ได้รับ :</label>
                    <textarea
                        type="text"
                        row="5"
                        className="form-control"
                        onChange={(event) => {
                            setExperience(event.target.value)
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
            {emergencyList.map((val, key) => {
                    return (
                        <div className="data card">
                            <div className="data-card-body text-left">
                                <p className="data-card-text">วินิจฉัย หรือประสบการณ์ที่ได้รับ : {val.experience}</p>
                                <button btn btn-danger onClick={() => {deleteData(val.id)}}>Delete</button>
                            </div>
                        </div>
                    );
                })}
        </div>
    </div>
  );
};

export default Emergency;