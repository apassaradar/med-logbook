import React from 'react';
import Datetime from '../../components/Datetime';


export const CoursesTwo = () => {
  return (
    <div className="container">
        <Datetime className="datetime" />
        <h1 className='info-name'>การเข้าเรียนที่ OPD</h1>
        <div className="information">
            <form action="">
                <div className="mb-3">
                    <label className="form-label" htmlFor="opd_unit">OPD Unit :</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter OPD Unit"
                    />
                </div>
                
                <button class="btn btn-success">
                    Add Data
                </button>
            </form>
        </div>
        <hr />
        <div className="datas">
            <button class="btn btn-primary" >
                Show Datas
            </button>
        </div>
    </div>
    
  );
};