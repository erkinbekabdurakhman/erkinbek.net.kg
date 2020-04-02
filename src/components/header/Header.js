import React from 'react';
import './header.css';
import Icon from '../images/flavicon.ico';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header"> 
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/#">
                    <img src={Icon} alt="logo" width="35" height="35" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto text-right">
                            <Link className="nav-item nav-link" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/aboutme">About me</Link>
                            <Link className="nav-item nav-link" to="/skills">Skills</Link>
                            <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                            <a className="nav-item nav-link" href="/#">Blog</a>
                            <Link className="nav-item nav-link" to="/contacts">Contacts</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
} 
export default Header;