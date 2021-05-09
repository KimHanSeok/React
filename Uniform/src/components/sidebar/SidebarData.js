import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'CLUB',
    path: '/club',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PREMIER LEAGUE',
        path: './item',
        icon: <IoIcons.IoIosPaper />
      },
      { 
        title: 'LA LIGA',
        path: '/item2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'SERIA A',
        path: '/item3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'BUNDESRIGA',
        path: '/item4',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'LIGUE 1',
        path: '/item5',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'NATIONAL',
    path: '/national',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'EUROPE',
        path: '/item6',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AISA',
        path: '/item7',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AMERICA',
        path: '/item8',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AFRICA',
        path: '/item9',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'OCEANIA',
        path: '/item10',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'LEGEND',
    path: '/legend',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'MATCH WORN',
    path: '/matchworn',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'CLEARANCE',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'FOOTER',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  
];
