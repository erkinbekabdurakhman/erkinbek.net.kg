import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header"> 
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    ERKINBEK
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" ></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto text-right">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/aboutme">About me</Link>
                        <Link className="nav-item nav-link" to="/projects">Projects</Link>
                        <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
 
export default Header;