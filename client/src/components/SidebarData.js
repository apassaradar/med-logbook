import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';



export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Courses',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'รายชื่อผู้ป่วยในความดูแล',
        path: '/courses/courses1',
        icon: <IoIcons.IoMdPersonAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าเรียนที่ OPD',
        path: '/courses/courses2',
        icon: <IoIcons.IoMdClipboard />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าร่วม Conference',
        path: '/courses/courses3',
        icon: <MdIcons.MdEventSeat />,
        cName: 'sub-nav'
      },
      {
        title: 'การอยู่เวรห้องฉุกเฉิน',
        path: '/courses/courses4',
        icon: <IoIcons.IoMdMedkit />,
        cName: 'sub-nav'
      },
      {
        title: 'การเข้าสังเกตการผ่าตัดใหญ่',
        path: '/courses/courses5',
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
    title: 'Grading',
    path: '/grading',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Manage',
    path: '/manage',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Students',
        path: '/manage/students',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Courses',
        path: '/manage/courses',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
