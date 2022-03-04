import React from "react";
import Card from "../../components/Card";
import styled from "styled-components";
import { MdEventSeat } from "react-icons/md";

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

const ManageCourses = () => {
  return (
    <div>
      <PageTitle>Courses</PageTitle>
      <CardContainer>
        <CardRow>
          <div className="col-md-1">
            <Card
              icon={MdEventSeat}
              title="รายชื่อผู้ป่วยในความดูแล"
              text="หน่วยละ 2 ราย"
              link="/grading/patients"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่"
              text="อย่างน้อยสัปดาห์ละ 1 ราย/หน่วย"
              link="/grading/observemajor"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เย็บแผล"
              text="อย่างน้อย 3 ราย"
              link="/grading/stitches"
            />
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card
              title="การเข้าเรียนที่ OPD"
              text="..."
              link="/courses/opd"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่"
              text="อย่างน้อย 2 ราย"
              link="/grading/helpmajor"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เใส่ Foley Cath."
              text="อย่างน้อย 2 ราย"
              link="/grading/foleycath"
            />
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card
              title="การเข้าร่วม Conference ของหน่วย"
              text=""
              link="/courses/conference"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก"
              text="อย่างน้อย 2 ราย"
              link="/grading/helpobserveminor"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้ทำการวัด CVP"
              text="..."
              link="/grading/cvp"
            />
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card
              title="การอยู่เวรห้องฉุกเฉิน"
              text="เวลา 19.00 - 22.00"
              link="/courses/emergency"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="รายชื่อผู้ป่วยที่ได้เห็น First aid in major trauma"
              text="อย่างน้อย 2 ราย"
              link="/grading/firstaid"
            />
          </div>
          <div className="col-md-1">
            <Card
              title="การสอนของ resident"
              text="..."
              link="/courses/resident"
            />
          </div>
        </CardRow>
      </CardContainer>
    </div>
  );
};


export default ManageCourses;