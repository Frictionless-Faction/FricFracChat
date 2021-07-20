import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css";

function Footer (){
    return(
        <footer className="navbar">
            <h1><Link className="link nav_item" to="/">Home</Link></h1>
            <h1><Link className="link nav_item" to="/Chat">Chat</Link></h1>
            <h1><Link className="link nav_item" to="/About">About</Link></h1>
        
        </footer>
    )
}
export default Footer;

