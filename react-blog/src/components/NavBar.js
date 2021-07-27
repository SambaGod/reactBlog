import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='p-3' color='light' light expand='md'>
      <NavbarBrand href='/'>
        <strong>React</strong>Blog
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <Router>
            <NavItem>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/articles-list'>
                Articles List
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/articles'>
                Articles Page
              </Link>
            </NavItem>
          </Router>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
