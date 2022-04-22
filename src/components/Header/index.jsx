import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./styles.css";

function Header() {
  const reserveSize = useSelector(state => state.reserve);

  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Link to="/reservas" className="reserva">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize.length} reserva(s)</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
