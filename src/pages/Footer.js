import React from 'react';
import { Link } from 'react-router-dom';
import footerCSS from '../css/footer.module.css';

function Footer (){
    return(
        <footer className={footerCSS.navbar}>
            <h1><Link className={footerCSS.nav_item} to="/">Home</Link></h1>
            <h1><Link className={footerCSS.nav_item} to="/Chat">Chat</Link></h1>
            <h1><Link className={footerCSS.nav_item} to="/About">About</Link></h1>
        
        </footer>
    )
}
export default Footer;

