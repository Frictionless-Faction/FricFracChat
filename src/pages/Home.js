import React from 'react';
import { Link } from 'react-router-dom';
import homeCSS from '../css/Home.module.css';

function Home() {
    return(
    <div className="container">
        <div className={homeCSS.bubble}>
            <h1> Postie </h1>
        </div>
        <div className={homeCSS.bubble_2}>
            
        <Link className={homeCSS.Link} to ="/About" style ={{textDecoration : "none"}}> <h3 className={homeCSS.h3}>About</h3></Link>
            
        </div>

        <div className={homeCSS.bubble_3}>           
           
            <Link className={homeCSS.Link} to = "/Chat"  style= {{textDecoration:"none"}}> <h3 className={homeCSS.h3}>Enter</h3></Link>

        </div>
    </div>
  );
}

export default Home;
