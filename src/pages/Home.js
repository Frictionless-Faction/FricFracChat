import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Home.css";

function Home() {
    return(
    <div className="container">
        <div className="bubble bubble-bottom-left">
            <h1> Postie </h1>
        </div>
        <div className="bubble_2 buuble2_bottom-left">
            
        <Link className="link" to ="/About" style ={{textDecoration : "none"}}> <h3>About</h3></Link>
            
        </div>

        <div className="bubble_3 buuble3_bottom-left">           
           
            <Link className="link" to = "/Chat"  style= {{textDecoration:"none"}}> <h3>Enter</h3></Link>

        </div>
    </div>
  );
}

export default Home;
