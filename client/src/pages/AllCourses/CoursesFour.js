import React from 'react';
import Datetime from '../../components/Datetime';


export const CoursesFour = () => {
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