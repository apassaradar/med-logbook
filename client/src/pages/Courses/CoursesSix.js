import React from 'react';
import Datetime from '../../components/Datetime';


export const CoursesSix = () => {
  return (
    <div className="container">
            <Datetime className="mb-20" />
            <h1 className='info-name'>รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่</h1>
            <div className='info-detail'>อย่างน้อย 2 ราย</div>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="patient_name">
                            ชื่อผู้ป่วย :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="hn">HN. :</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter HN."
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="diagnosis">Diagnosis :</label>
                        <textarea
                            type="text"
                            row="5"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="ward">Ward :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Ward"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="unit">Unit :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Unit"
                        />
                    </div>
                    <button class="btn btn-success">
                        Add Patient
                    </button>
                </form>
            </div>
            <hr />
            <div className="patients">
                <button class="btn btn-primary" >
                    Show Patients
                </button>
            </div>
        </div>
    
  );
};
