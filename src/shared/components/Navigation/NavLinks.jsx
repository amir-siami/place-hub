import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import "./NavLinks.css";
import Button from "../FormElements/Button";

function NavLinks(props) {
  const auth = useContext(AuthContext);
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn ? (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      ) : (
        <li>
          <Button onClick={handleLogout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
