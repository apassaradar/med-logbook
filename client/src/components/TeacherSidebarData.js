import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';



export const TeacherSidebarData = [
  
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />
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
