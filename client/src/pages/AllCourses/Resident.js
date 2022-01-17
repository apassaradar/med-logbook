import React from 'react';
import Datetime from '../../components/Datetime';


export const Resident = () => {
    return (
        <div className="container">
            <Datetime className="mb-20" />
            <h1 className='info-name'>การสอนของ Resident</h1>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="resident">เรื่องที่สอน :</label>
                        <textarea
                            type="text"
                            row="2"
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

