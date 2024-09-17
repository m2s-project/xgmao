import React from 'react'
import logo from "../../assets/logo.png";
import "./header.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className='header-start'>
        <Link to={"/home"}>
      <img src={logo} alt="logo" width={25} />
      </Link>
      </div>
      <div className='header-center'></div>
      <div className='header-end'></div>
    </div>
  )
}

export default Header
