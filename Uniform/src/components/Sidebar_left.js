import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar_left.css';  
import { IconContext } from 'react-icons';
import './Dropdown.css';


function Sidebar_left() {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown_side, setDropdown_side] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown_side(false);
    } else {
      setDropdown_side(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown_side(false);
    } else {
      setDropdown_side(false);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar_left'>
          <Link to='#' className='left-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'left-menu active' : 'left-menu'}>
          <ul className='left-menu-items' onClick={showSidebar}>
            <li className='sidebar_left-toggle'>
              <Link to='#' className='left-bars'>
                <AiIcons.AiOutlineClose />
              </Link>     
            </li>
            {SidebarData.map((item, index) => {
              return (  
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link> 
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar_left;
