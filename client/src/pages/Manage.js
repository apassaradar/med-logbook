import React from "react";



const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <text className="card-description">{props.description}</text>
            </div >
            <button className="card-btn">{props.btn}</button>
        </div >
    );
};

const Manage = () => {
    return (
        <div className="crad-wrapper">
            <Card
                title="Manage Students"
                description="ทำการเพิ่ม ลบ หรือแก้ไขนักศึกษาได้ที่นี่"
                btn="Manage Students"
            />

            <Card
                title="Manage Courses"
                description="ทำการเพิ่ม ลบ หรือแก้ไขวิชาเรียนได้ที่นี่"
                btn="Manage Courses"
            />

            <Card
                title="Manage Courses"
                description="ทำการเพิ่ม ลบ หรือแก้ไขวิชาเรียนได้ที่นี่"
                btn="Manage Courses"
            />

            <Card
                title="Manage Courses"
                description="ทำการเพิ่ม ลบ หรือแก้ไขวิชาเรียนได้ที่นี่"
                btn="Manage Courses"
            />
        </div>
    );
};

export default Manage;