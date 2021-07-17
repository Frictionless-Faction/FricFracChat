import React from "react";
import Footer from "./Footer";
import "./About.css";
import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";



export default function About() {
  return (
    <div className="about">
      <h1>About Our Project</h1>
      <div className="project">
        <p>
          FricFracChat is a project that created collaboratively as a final
          project
        </p>

        <h3>Dependencies Used:</h3>

        <div className="flat-under">
          <div className="grow-container">
            <a
              className="to-react circle-button"
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <FaReact />
            </a>
          </div>

          <div className="grow-container">
            <a
              className="to-firebase circle-button"
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiFirebase />
            </a>
          </div>

          <div className="grow-container ">
            <a
              className="to-figma circle-button"
              href="https://www.figma.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFigma />
            </a>
          </div>

          <div className="grow-container">
            <a
              className="to-github circle-button"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <br />
        <br />
        <h2> FricFracChat Github Repository: </h2>
        <div className="githubRepo">
          <div className="btn-repo">
            <a className= "link"
              href="https://github.com/Frictionless-Faction"
              target="_blank"
              rel="noreferrer"
              style ={{textDecoration :"none"}}
            >
              Our Code
            </a>
          </div>
        </div>
        <br />
        <br />
        <h2>Credit By:</h2>
        <div className="credit">
          

          <div className="links_git">
            <div className="gits">
              <a
                href="https://github.com/dannyvsm"
                target="_blank"
                rel="noreferrer"
              >
                Danny Smith
              </a>
            </div>

            <div className="gits">
              <a
                href="https://github.com/Jwilss3"
                target="_blank"
                rel="noreferrer"
              >
                Jess Wilson
              </a>
            </div>

            <div className="gits">
              <a
                href="https://github.com/Minakrv"
                target="_blank"
                rel="noreferrer"
              >
                Mina Khosravi
              </a>
            </div>

            <div className="gits">
              <a
                href="https://github.com/RomanHyde"
                target="_blank"
                rel="noreferrer"
              >
                Roman Hyde
              </a>
            </div>
          </div>
        </div>
      </div>





      <Footer />
    </div>
  );
}
