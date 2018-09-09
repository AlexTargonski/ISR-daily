import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Col
}                           from 'mdbreact';
import styled               from 'styled-components';

import Logo                 from './logo.png';

const Menu = styled(Navbar)`
  background : linear-gradient(to right, #723af9, #46aafc) !important;
`;

const LogoBrand = styled(NavbarBrand)`
  background      : url(${Logo}) no-repeat;
  background-size : 222px 80px;
  height          : 91px;
  margin-top      : 3px;
  outline         : 0;
  width           : 100%;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Menu dark expand="md" scrolling>
        <Col md="2" sm="8">
          <LogoBrand href="/" />
        </Col>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Help</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <form className="form-inline md-form mt-0">
                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
              </form>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Menu>
    );
  }
}

export default Header;
