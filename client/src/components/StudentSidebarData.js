import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';



export const StudentSidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Courses',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'รายชื่อผู้ป่วยในความดูแล',
        path: '/courses/patients',
        icon: <IoIcons.IoMdPersonAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าเรียนที่ OPD',
        path: '/courses/opd',
        icon: <IoIcons.IoMdClipboard />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าร่วม Conference',
        path: '/courses/conference',
        icon: <MdIcons.MdEventSeat />,
        cName: 'sub-nav'
      },
      {
        title: 'การอยู่เวรห้องฉุกเฉิน',
        path: '/courses/emergency',
        icon: <IoIcons.IoMdMedkit />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าสังเกตการผ่าตัดใหญ่',
        path: '/courses/observemajor',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'See all courses',
        path: '/course',
        icon: <MdIcons.MdOutlinePersonalInjury />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />
  }
];
