import React, { useState,useContext } from "react";
import { Container, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./Header.css";
import { AuthContext } from "../../Context/authContext";
const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/event',
    display: 'Event',
    submenu: [
      { path: '/techevent', display: 'Technical' },
      { path: '/event', display: 'Non Technical' }
    ]
  },
  {
    path: '/club',
    display: 'Club',
    submenu: [
      { path: '/club', display: 'Technical' },
      { path: '/club', display: 'Non Technical' }
    ]
  },
  {
    path: '/contact',
    display: 'Contact us'
  },
  {
    path: '/booking',
    display: 'Booking'
  },
];

const Header = () => {
  const {user,logout} =useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogin=async()=>{
    if(user){
      await logout()
    }
    navigate('/login')
  }

  
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isMouseOverClub, setIsMouseOverClub] = useState(false);
  const [isMouseOverEvent, setIsMouseOverEvent] = useState(false);

  const headerRef = useRef(null);

  const handleMouseEnter = (display) => {
    if (display === 'Club') {
      setIsMouseOverClub(true);
    } else if (display === 'Event') {
      setIsMouseOverEvent(true);
    }
  };

  const handleMouseLeave = (display) => {
    if (display === 'Club') {
      setIsMouseOverClub(false);
    } else if (display === 'Event') {
      setIsMouseOverEvent(false);
    }
  };

  const handleClubDropdownToggle = () => {
    setIsClubDropdownOpen(!isClubDropdownOpen);
  };

  const handleEventDropdownToggle = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}
                      onMouseEnter={() => handleMouseEnter(item.display)}
                      onMouseLeave={() => handleMouseLeave(item.display)}>
                    {item.submenu ? (
                      <Dropdown nav inNavbar isOpen={(item.display === 'Club' && isClubDropdownOpen && isMouseOverClub) ||
                                                        (item.display === 'Event' && isEventDropdownOpen && isMouseOverEvent)} 
                                toggle={(item.display === 'Club' ? handleClubDropdownToggle : handleEventDropdownToggle)}>
                        <DropdownToggle nav caret>
                          {item.display}
                        </DropdownToggle>
                        <DropdownMenu>
                          {item.submenu.map((submenuItem, subIndex) => (
                            <DropdownItem key={subIndex}>
                              <NavLink to={submenuItem.path} activeClassName="active_link">
                                {submenuItem.display}
                              </NavLink>
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    ) : (
                      <NavLink to={item.path} activeClassName="active_link">
                        {item.display}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center mt-0 gap-4">
                <Button className="btn  primary__btn custom gap-4 mt-0" onClick={handleLogin}>
                  {
                    !user?"Login":"Logout"
                  }
                </Button>
                <Button className="btn primary__btn custom  " >
                  <Link to='/register'>Register</Link>
                </Button>
                <span className="mobile_menu">
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
