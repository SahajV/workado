import * as React from "react";
import { Navbar, Dropdown, Nav, Icon, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";

const styles = {
  padding: 20,
  textAlign: "center"
};

export default function NavbarInstance() {
  return (
    <Navbar>
      <Navbar.Header>
        <img src={process.env.PUBLIC_URL + '/educado.svg'} height="100%" />
      </Navbar.Header>
      <Navbar.Body>
        {/* <Nav>
          <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav> */}
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="sign-out" />} ><Link to="/logout">Sign out</Link></Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
