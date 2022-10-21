import { React } from "react";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdExpandMore } from "react-icons/md";
//import gsap from "gsap";
import videoBg from "./Videos/code.mp4";
import videoPoster from "./Images/background.jpg";

function Home() {
  // useEffect
  // gsap.from(".header-content", {
  //   duration: 1,
  //   opacity: 1,
  //   y: -60,
  //   ease: "power4.out",
  // });

  return (
    <>
      <section id="home">
        <div className="header">
          <video
            className="videoBg"
            src={videoBg}
            poster={videoPoster}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <Container>
            <div className="header-content">
              <h1 className="display-6">Hi, my name is</h1>
              <h1 className="display-1 fw-bold">Andrei Agmata.</h1>
              <p className="lead">
                I am currently studying Computer Programming and Analysis at
                Seneca College
                <br />
                Specializing in software and web development.
              </p>

              <div className="learnMoreContainer bounceInDown">
                <div className="learnMoreContents">
                  <IconContext.Provider value={{ size: 100 }}>
                    <>
                      <a href="#about">
                        <MdExpandMore fill="white" />
                      </a>
                    </>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Home;
