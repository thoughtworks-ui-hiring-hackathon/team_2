import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_header.scss';

const Header = () => {
    // const isExplore = window.location.href.indexOf('explore') > 0;
    const isExplore = false;
    return (
        <div className="header">
            <Link to="/" className="nav-link logo" >Movie App</Link>
            <Link to="/" className={`nav-link ${isExplore ? '' : 'active'}`}>Home</Link>
            <Link to="/explore" className={`nav-link ${isExplore ? 'active' : ''}`}>Explore</Link>
        </div>
    );
}

export default Header;
