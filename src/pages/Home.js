import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1> CHAT ROOM </h1>
        <h2 className="button">
          <Link className="link" to="/Chat">
            {" "}
            Enter{" "}
          </Link>
        </h2>
       <div className="login"></div>
        <footer>
          <Link className="link" to="/About">
            {" "}
            About{" "}
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Home;
