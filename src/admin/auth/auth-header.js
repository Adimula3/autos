import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-icon.png";

const AuthHeader = () => {
    return(
        <>
        <div className="auth-header">
            <div className="navbar-header">
            <Link className="logo-link" to="/">
                  <img src={logo} alt="" className="img-fluid" />
                  <h2>MOFARDSON-AUTOS </h2>
                </Link>
                        
            </div>
        </div>

        </>
    )
} 

export default AuthHeader; 