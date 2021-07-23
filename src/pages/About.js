// import React from "react";
// import Popup from "reactjs-popup";
// import { Link } from "react-router-dom";
// import aboutCSS from '../css/About.module.css';
// import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
// import { SiFirebase } from "react-icons/si";
// import danny from "../images/danny.jpg";
// import roman from "../images/roman.png";
// import jess from "../images/jess.jpeg";
// import mina from "../images/mina.JPG";
// import arrow from "../images/arrow.png";

// export default function About() {
//   return (
//     <div className={aboutCSS.about}>
//     <div className={aboutCSS.arrow}>
//         <img src={arrow} alt="arrow" className={aboutCSS.arrowImg} />
//         <Link className={aboutCSS.link1} to="/" style={{ textDecoration: "none" }}>
//           Home
//         </Link>

//         <h1 className={aboutCSS.pageTitle}>About Our Project</h1>
//       </div>
//       <div className="project">
//         <Popup overlayStyle={{background:"rgba(0, 0, 0, 0.7)"}} arrow={{color:"black"}} trigger={<button className={aboutCSS.aboutBtn}>About Us</button> }>
//           {(close) => (
//             <div className="content" style={{background:"white",width: "500px",margin:"10px", padding:"20px",borderRadius:"5px",position:"relative", color:"black"}}>
              
//                 Welcome to the FricFrac Chat project! (We caught you looking!)
//                 👀{" "}
              
//               <br />
//               ℹ️ Info 
//               <ul>
//                 <li>Project Start Date: 12th July 2021 </li>
//                 <li>Allotted time: 2 weeks </li>
//                 <li>Concept: Chat app </li>
//                 Description: This is the final project of 4 junior developers on
//                 the Code Nation master course (cohort 24). The overall concept
//                 is a chat app that people can use to talk to each other. The
//                 project has a react front-end and a firebase back-end. At the
//                 time of writing, the title is pending.
//                 <br />
//               </ul>
//               👨‍💻Who or what is Code Nation?
//               <br />
//               Code Nation is," unique, business led, digital training provider
//               with a sole purpose of creating work ready, employable talent."
//               You can find their website{" "}
//               <a
//                 href="https://wearecodenation.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{textDecoration:"none", color:"red"}}
//               >
//                 here
//               </a>
//               <a className="close" href=" " onClick={close} style={{position:"absolute", top:"0px",right:"30px",fontSize:"20px",fontWeight:"bold",textDecoration:"none",color:"green"}}>
//                 &times;
//               </a>
//             </div>
//           )}
//         </Popup>

//         <div className="dependency">
//           <Popup overlayStyle={{background:"rgba(0, 0, 0, 0.7)"}} arrow={{color:"black"}} trigger={<button className={aboutCSS.depBtn}>Dependenies</button>}>
//             {(close) => (
//               <div style={{background:"white",width: "300px",margin:"10px", padding:"20px",borderRadius:"5px",position:"relative", color:"black"}}>
//                 <div className={aboutCSS.growContainer} style={{display: "inline-block",margin: "1em"}}>
                  
//                   <a
//                     className="to-react circle-button"
//                     href="https://reactjs.org/"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{fontFamily: "Roboto sans-serif",
//                     color: "rgb(185, 184, 184)",
//                     display: "inline-block",
//                     fontSize: "2rem",
//                     borderRadius: "50%",
//                     transition: "all 0.2s ease", animation: "circle-anim 0.3s ease forwards"}}
//                   >
//                     <FaReact />
//                   </a>
//                 </div>

//                 <div className={aboutCSS.growContainer} style={{display: "inline-block",margin: "1em"}}>
//                   <a
//                     className="to-firebase circle-button"
//                     href="https://firebase.google.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{fontFamily: "Roboto sans-serif",
//                     color: "rgb(185, 184, 184)",
//                     display: "inline-block",
//                     fontSize: "2rem",
//                     borderRadius: "50%",
//                     transition: "all 0.2s ease", animation: "circle-anim 0.3s ease forwards"}}
//                   >
//                     <SiFirebase />
//                   </a>
//                 </div>

//                 <div className={aboutCSS.growContainer} style={{display: "inline-block",margin: "1em"}}>
//                   <a
//                     className="to-figma circle-button"
//                     href="https://www.figma.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{fontFamily: "Roboto sans-serif",
//                     color: "rgb(185, 184, 184)",
//                     display: "inline-block",
//                     fontSize: "2rem",
//                     borderRadius: "50%",
//                     transition: "all 0.2s ease",animation: "circle-anim 0.3s ease forwards"}}
//                   >
//                     <FaFigma />
//                   </a>
//                 </div>

//                 <div className={aboutCSS.growContainer} style={{display: "inline-block",margin: "1em"}}>
//                   <a
//                     className="to-github circle-button"
//                     href="https://github.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{fontFamily: "Roboto sans-serif",
//                     color: "rgb(185, 184, 184)",
//                     display: "inline-block",
//                     fontSize: "2rem",
//                     borderRadius: "50%",
//                     transition: "all 0.2s ease",animation: "circle-anim 0.3s ease forwards"}}
//                   >
//                     <FaGithub />
//                   </a>
//                 </div>

//                 <a className={aboutCSS.close} href=" " onClick={close} style={{position:"absolute", top:"0px",right:"5px",fontSize:"20px",fontWeight:"bold",textDecoration:"none",color:"green"}}>
//                   &times;
//                 </a>
//               </div>
//             )}
//           </Popup>
//         </div>

//         <div className={aboutCSS.githubRepo}>
//           <div className={aboutCSS.btnRepo}>
//             <a
//               className="link"
//               href="https://github.com/Frictionless-Faction"
//               target="_blank"
//               rel="noreferrer"
//               style={{ textDecoration: "none" }}
//             >
//               Our Code
//             </a>
//           </div>
//         </div>

//         <br />
//         <br />
//         <h2 className={aboutCSS.h2}>Our Team:</h2>
//       </div>
//       <div>
        // <div className="row">
        //   <div className="linksGit">
        //     <div className="gits">
        //       <img src={danny} alt="Danny" />
        //       <div className="container">
        //         <p className="title">Front-End Developer</p>
        //         <p className="atName">@dannyvsm</p>
        //         <p className="p">
        //           <button className="button">
        //             <a className="gitsa"
        //               href="https://github.com/dannyvsm"
        //               target="_blank"
        //               rel="noreferrer"
        //               style={{ textDecoration: "none" }}
        //             >
        //               {" "}
        //               Github
        //             </a>
        //           </button>
        //         </p>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="linksGit">
        //     <div className="gits">
        //       <img src={jess} alt="Jess" />
        //       <div className="container">
        //         <p className="title">Front-End Developer</p>
        //         <p className="atName">@Jwilss3</p>
        //         <p className="p">
        //           <button className="button">
        //             <a
        //               href="https://github.com/Jwilss3"
        //               target="_blank"
        //               rel="noreferrer"
        //               style={{ textDecoration: "none" }}
        //             >
        //               {" "}
        //               Github
        //             </a>
        //           </button>
        //         </p>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="linksGit">
        //     <div className="gits">
        //       <img src={mina} alt="Mina" />
        //       <div className="container">
        //         <p className="title">Fullstack Developer</p>
        //         <p className="atName">@Minakrv</p>
        //         <p className="p">
        //           <button className="button">
        //             <a
        //               href="https://github.com/Minakrv"
        //               target="_blank"
        //               rel="noreferrer"
        //               style={{ textDecoration: "none" }}
        //             >
        //               {" "}
        //               Github
        //             </a>
        //           </button>
        //         </p>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="linksGit">
        //     <div className="gits">
        //       <img src={roman} alt="Roman" />
        //       <div className="container">
        //         <p className="title" >Project Manager, UI/UX Designer & Fullstack Developer</p>
        //         <p className="atName">@RomanHyde</p>
        //         <p className="p">
        //           <button className="button">
        //             <a
        //               href="https://github.com/RomanHyde"
        //               target="_blank"
        //               rel="noreferrer"
        //               style={{ textDecoration: "none" }}
        //             >
        //               {" "}
        //               Github
        //             </a>
        //           </button>
        //         </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "../css/About.css";
import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import danny from "../images/danny.jpg";
import roman from "../images/roman.png";
import jess from "../images/jess.jpeg";
import mina from "../images/mina.JPG";
import arrow from "../images/arrow.png";

export default function About() {
  return (
    <div className="about">
      <div className="arrow">
        <img src={arrow} alt="arrow" className="arrowImg" />
        <Link className="link1" to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>

        <h1 className="title1">About Our Project</h1>
      </div>
      <div className="project">
        <Popup trigger={<button className="aboutBtn">About Us</button>}>
          {(close) => (
            <div className="content">
              <h3>
                Welcome to the FricFrac Chat project! (We caught you looking!)
                👀{" "}
              </h3>
              <br />
              <h3>ℹ️ Info </h3>
              <ul>
                <li>Project Start Date: 12th July 2021 </li>
                <li>Allotted time: 2 weeks </li>
                <li>Concept: Chat app </li>
                Description: This is the final project of 4 junior developers on
                the Code Nation master course (cohort 24). The overall concept
                is a chat app that people can use to talk to each other. The
                project has a react front-end and a firebase back-end. At the
                time of writing, the title is pending.
                <br />
              </ul>
              <h3>👨‍💻Who or what is Code Nation?</h3>
              <br />
              Code Nation is," unique, business led, digital training provider
              with a sole purpose of creating work ready, employable talent."
              You can find their website{" "}
              <a
                href="https://wearecodenation.com"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              <a className="close" href=" " onClick={close}>
                &times;
              </a>
            </div>
          )}
        </Popup>

        <div className="dependencie">
          <Popup trigger={<button className="depBtn">Dependenies</button>}>
            {(close) => (
              <div>
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

                <a className="close" href=" " onClick={close}>
                  &times;
                </a>
              </div>
            )}
          </Popup>
        </div>

        <div className="githubRepo">
          <div className="btnRepo">
            <a
              className="link"
              href="https://github.com/Frictionless-Faction"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Our Code
            </a>
          </div>
        </div>

        <br />
        <br />
        <h2>Our Team:</h2>
      </div>
      <div>
      <div className="row">
          <div className="linksGit">
            <div className="gits">
              <img src={danny} alt="Danny" />
              <div className="container">
                <p className="title">Front-End Developer</p>
                <p className="atName">@dannyvsm</p>
                <p className="p">
                  <button className="button">
                    <a className="gitsa"
                      href="https://github.com/dannyvsm"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="linksGit">
            <div className="gits">
              <img src={jess} alt="Jess" />
              <div className="container">
                <p className="title">Front-End Developer</p>
                <p className="atName">@Jwilss3</p>
                <p className="p">
                  <button className="button">
                    <a
                      href="https://github.com/Jwilss3"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="linksGit">
            <div className="gits">
              <img src={mina} alt="Mina" />
              <div className="container">
                <p className="title">Fullstack Developer</p>
                <p className="atName">@Minakrv</p>
                <p className="p">
                  <button className="button">
                    <a
                      href="https://github.com/Minakrv"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="linksGit">
            <div className="gits">
              <img src={roman} alt="Roman" />
              <div className="container">
                <p className="title" >Project Manager, UI/UX Designer & Fullstack Developer</p>
                <p className="atName">@RomanHyde</p>
                <p className="p">
                  <button className="button">
                    <a
                      href="https://github.com/RomanHyde"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}