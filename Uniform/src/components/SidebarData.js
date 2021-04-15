import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Side1',
    path: '/side1',
    icon: <AiIcons.AiFillHome />,
    cName: 'left-text'
  },
  {
    title: 'Side2',
    path: '/side2',
    icon: <IoIcons.IoIosPaper />,
    cName: 'left-text'
  },
  {
    title: 'Side3',
    path: '/side3',
    icon: <FaIcons.FaCartPlus />,
    cName: 'left-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'left-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'left-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'left-text'
  }
];
