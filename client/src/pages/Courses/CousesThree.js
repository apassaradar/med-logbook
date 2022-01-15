import React from 'react';
import Datetime from '../../components/Datetime';


export const CoursesThree = () => {
  return (
    <div className="container">
        <Datetime className="datetime" />
        <h1 className='info-name'>การเข้าร่วม Conference ของหน่วย</h1>
        <div className="information">
            <form action="">
                <div className="mb-3">
                    <label className="form-label" htmlFor="conference">ชื่อ Conference :</label>
                    <textarea
                        type="text"
                        row="5"
                        className="form-control"
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