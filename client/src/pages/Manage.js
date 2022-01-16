import React from "react";
import Card from "../components/Card";
import styled from "styled-components";


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

export const Manage = () => {
  return (
    <div>
      <PageTitle>Manage</PageTitle>
      <CardContainer>
        <CardRow>
          <div className="col-md-1">
            <Card 
            title="Manage Students" 
            text="ทำการเพิ่ม ลบ หรือแก้ไขข้อมูลนักศึกษาได้ที่นี่" 
            link='/manage/students'/>
          </div>
        </CardRow>
        <CardRow>
          <div className="col-md-1">
            <Card 
            title="Manage Courses" 
            text="ทำการเพิ่ม ลบ หรือแก้ไขข้อมูลวิชาเรียนได้ที่นี่" 
            link='/manage/courses'/>
          </div>
        </CardRow>
      </CardContainer>
    </div>
  );
};
