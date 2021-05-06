import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import Item from '../components/Item';

export const SidebarData = [
  {
    title: 'CLUB',
    path: '/overview',
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
        path: '/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'SERIA A',
        path: '/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'BUNDESRIGA',
        path: '/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'LIGUE 1',
        path: '/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'NATIONAL',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'EUROPE',
        path: '/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AISA',
        path: '/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AMERICA',
        path: '/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'AFRICA',
        path: '/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'OCEANIA',
        path: '/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'LEGEND',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'MATCH WORN',
    path: '/team',
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
