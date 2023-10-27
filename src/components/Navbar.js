import React from "react";
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";



export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
              <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
                </a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.AboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
           
          </form> */}


{/* <div className={`form-check form-switch text-dark`} >
            <input className="form-check-input" onClick={ props.toggleModeRed}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable { props.modeRed==="light"? "red":"light"} Mode</label>
        </div> */}
     
          

          <div className={`form-check form-switch text-${props.mode ==="light" ? "dark" :"light"}`} >
            <input className="form-check-input" onClick={ props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable { props.mode==="dark"? "light":"dark"} Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // AboutText:PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Set title here"
    // AboutText:"About text here"
}
