import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../../store/ducks/authe";

import { Container } from "./styles";

import { FaUserCircle, FaDolly } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ButtonLog() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user_session"));

  function handleSignOut(e) {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("sback_id");
    localStorage.removeItem("user_session");
  }
  /*Material ui configurations for isAuthenticat*/
  return (
    <Container>
      <div className="dropdown">
        <button className="dropbtn">
          <FaUserCircle/>
          <span>{user.userName.split(" ")[0]}</span>
        </button>
        <div className="dropdown-content">
          <Link to="/user/orders"><FaDolly/> Ver pedidos</Link>
          <a href="/" onClick={handleSignOut}><FaSignOutAlt/> Sair</a>
        </div>
      </div>
    </Container>
  );
}

export default ButtonLog;
