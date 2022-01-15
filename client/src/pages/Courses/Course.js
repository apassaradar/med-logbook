import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CgUserAdd } from 'react-icons/cg';
import { FaAmbulance, FaBriefcaseMedical } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';



const Button = styled.button`
  
  border-radius: 4px;
  margin-top: 45px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const CourseSection = styled.div`
  padding: 20px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CourseHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;
`;

const CourseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const CourseCard = styled(Link)`
  background: #c0c0c0;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 300px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(1) {
    margin: 10px;
  }
  &:nth-child(2) {
    margin: 10px;
  }
  &:nth-child(3) {
    margin: 10px;
  }
  &:nth-child(4) {
    margin: 10px;
  }
  &:nth-child(5) {
    margin: 10px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

const CourseCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  padding: 24px;
  align-items: center;
  color: #000;
`;

const CourseCardIcon = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #000;
  font-size: 30px;
`;

const CourseCardName = styled.h4`
  font-size: 28px;
  margin-bottom: 15px;

`;

const CourseCardDetail = styled.h3`
  font-size: 18px;
  color: gray;
  margin-bottom: 15px;
`;



export const Course = () => {
  return (
          <CourseSection>
            <CourseWrapper>
              <CourseHeading>All Courses</CourseHeading>
              <CourseContainer>
                <CourseCard to='/courses/courses1'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <CgUserAdd />
                    </CourseCardIcon>
                    <CourseCardName>ผู้ป่วยในความดูแล</CourseCardName>
                    <CourseCardDetail>หน่วยละ 2 ราย</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses2'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaBriefcaseMedical />
                    </CourseCardIcon>
                    <CourseCardName>การเข้าเรียนที่ OPD</CourseCardName>
                    <CourseCardDetail>$99.99</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses3'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <HiOutlineUserGroup />
                    </CourseCardIcon>
                    <CourseCardName>การเข้าร่วม Conference</CourseCardName>
                    <CourseCardDetail>$99.99</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses4'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaAmbulance />
                    </CourseCardIcon>
                    <CourseCardName>การเข้าเวรห้องฉุกเฉิน</CourseCardName>
                    <CourseCardDetail>เวลา 19.00 - 22.00</CourseCardDetail>
                    <Button primary>See Detial</Button>
                  </CourseCardInfo>
                </CourseCard>
              </CourseContainer>
              </CourseWrapper>
              <CourseWrapper>
              <CourseContainer>
                <CourseCard to='/courses/courses5'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <CgUserAdd />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่</CourseCardName>
                    <CourseCardDetail>อย่างน้อยสัปดาห์ละ 2 ราย/หน่วย</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses6'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaBriefcaseMedical />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses7'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <HiOutlineUserGroup />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย (ไม่รวมเย็บแผล)</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses8'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaAmbulance />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เห็น First aid in major trauma</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย</CourseCardDetail>
                    <Button primary>See Detial</Button>
                  </CourseCardInfo>
                </CourseCard>
              </CourseContainer>
              </CourseWrapper>
              <CourseWrapper>
              <CourseContainer>
                <CourseCard to='/courses/courses9'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <CgUserAdd />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่</CourseCardName>
                    <CourseCardDetail>อย่างน้อยสัปดาห์ละ 2 ราย/หน่วย</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses10'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaBriefcaseMedical />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/course11'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <HiOutlineUserGroup />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย (ไม่รวมเย็บแผล)</CourseCardDetail>
                    <Button primary>See Detail</Button>
                  </CourseCardInfo>
                </CourseCard>
                <CourseCard to='/courses/courses12'>
                  <CourseCardInfo>
                    <CourseCardIcon>
                      <FaAmbulance />
                    </CourseCardIcon>
                    <CourseCardName>รายชื่อผู้ป่วยที่ได้เห็น First aid in major trauma</CourseCardName>
                    <CourseCardDetail>อย่างน้อย 2 ราย</CourseCardDetail>
                    <Button primary>See Detial</Button>
                  </CourseCardInfo>
                </CourseCard>
              </CourseContainer>
            </CourseWrapper>
          </CourseSection>

          
  );
};

