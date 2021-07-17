import React from "react";
import Footer from "./Footer";

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
        <div className="class='flat-under'">
          <div className="grow-container">
            <a
              className="react"
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
          </div>

          <div className="grow-container">
            <a
              className="firebase"
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase
            </a>
          </div>

          <div className="grow-container">
            <a
              className="figma"
              href="https://www.figma.com/"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>
          </div>

          <div className="grow-container">
            <a
              className="github"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="githubRepo">
          <h2> FricFracChat Github Repository: </h2>
          <div className="btn-repo">
            <a
              href="https://github.com/Frictionless-Faction"
              target="_blank"
              rel="noreferrer"
            >
              Github Reposityry
            </a>
          </div>
        </div>

        <div className="credit">
          <h2>Credit By:</h2>

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
