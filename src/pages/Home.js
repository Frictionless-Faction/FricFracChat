import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
    <div>
        <div>
            <h1> CHAT ROOM </h1>
            <h2 className = "button">
                <Link className="link" to = "/Chat"> Enter </Link>
            </h2>

            <footer>
                <Link className="link" ro ="/About"> About </Link>
            </footer>
        </div>
    </div>
    )
}

export default Home;