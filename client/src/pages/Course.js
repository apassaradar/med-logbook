import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { MdEventSeat } from 'react-icons/md';


const PageTitle = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 8px;
  justify-self: center;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  justify-self: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
`;

const CardRow = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Course = () => {
  return (
    <div>
      <PageTitle>All Courses</PageTitle>
      <CardContainer>
        <CardRow>
          <div className="col-md-1">
            <Card 
            icon= {MdEventSeat}
            title="รายชื่อผู้ป่วยในความดูแล" 
            text="หน่วยละ 2 ราย" 
            link='/courses/courses1'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่" text="อย่างน้อยสัปดาห์ละ 1 ราย/หน่วย" link='/courses/courses5'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เย็บแผล" text="อย่างน้อย 3 ราย" link='/courses/courses9'/>
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card title="การเข้าเรียนที่ OPD" text="..." link='/courses/courses2'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่" text="อย่างน้อย 2 ราย" link='/courses/courses6'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เใส่ Foley Cath." text="อย่างน้อย 2 ราย" link='/courses/courses10'/>
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card title="การเข้าร่วม Conference ของหน่วย" text="" link='/courses/courses3'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก" text="อย่างน้อย 2 ราย" link='/courses/courses7'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้ทำการวัด CVP" text="..." link='/courses/courses11'/>
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card title="การอยู่เวรห้องฉุกเฉิน" text="เวลา 19.00 - 22.00" link='/courses/courses4'/>
          </div>
          <div className="col-md-1">
            <Card title="รายชื่อผู้ป่วยที่ได้เห็น First aid in major trauma" text="อย่างน้อย 2 ราย" link='/courses/courses8'/>
          </div>
          <div className="col-md-1">
            <Card title="การสอนของ resident" text="..." link='/courses/courses12'/>
          </div>
        </CardRow>
      </CardContainer>
    </div>
  );
};
