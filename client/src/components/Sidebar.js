import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { TeacherSidebarData } from './TeacherSidebarData';
import { StudentSidebarData } from './StudentSidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;  
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;                                                                                    
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Logout = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;  
  margin-left: 80%;
  font-size: 4rem;
  height: 80px;
  display: flex;
  align-items: center;                                                                                    
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [SidebarData, setSidebarData] = useState([]);
  useEffect(() => {

    const role = window.localStorage.getItem('role');
    
    if (role == 'student') {
      setSidebarData(StudentSidebarData)
    } else {
      setSidebarData(TeacherSidebarData)
    }
  }, [])

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav sticky='top'>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavLogo to='/overview'> MedLogbook </NavLogo>
          <Logout>
            <Link to='/login' class="btn btn-danger"> Log out </Link>
          </Logout>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
