import React from "react";
import { Menu as Nav, Icon, Button } from "element-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleSignout }) => (
  <Nav>
    <div className="nav-container">
      {/* App title / Icon */}
      <Nav.Item index="1">
        <NavLink to="/" className="nav-Link">
          <span className="app-title">
            <img src="gloryroad-logo.png" alt="App-Icon" className="app-icon" />
            Glory Road
          </span>
        </NavLink>
      </Nav.Item>
      <div className="nav-items">
        <Nav.Item index="2">
          <span className="app-user">Hello, {user.username}</span>
        </Nav.Item>
        <Nav-Item index="3">
          <NavLink to="doneList" className="nav-link">
            <Icon name="setting" />
            Done List
          </NavLink>
        </Nav-Item>
        <Nav-Item index="4">
          <NavLink to="profile" className="nav-link">
            <Icon name="setting" />
            Profile
          </NavLink>
        </Nav-Item>
        <Nav.Item index="5">
          <Button type="warning" onClick={handleSignout}>
            Sign out
          </Button>
        </Nav.Item>
      </div>
      {/* Navbar Items */}
    </div>
  </Nav>
);

export default Navbar;
