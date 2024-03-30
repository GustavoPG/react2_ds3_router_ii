import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
      <Nav className="justify-content-end text-white bg-secondary p-3 nav" activeKey="/home">
        <span className='me-auto'><i className="fa-solid fa-location-dot my-icon"></i></span>
        <NavLink
          className={({ isActive }) => isActive ? "active" : ""}
          to="/">Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active" : ""}
          to="/pokemones">Pokemones
        </NavLink>
      </Nav>
  );
};

export default NavBar;