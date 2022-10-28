import { React, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdExpandMore } from "react-icons/md";
import { gsap } from "gsap";

function Home() {
  const tl = gsap.timeline();
  const el = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(
        [".headline h2", ".headline h1", ".headline h3"],
        {
          duration: 1,
          y: 100,
          ease: "power3.out",
          stagger: 0.3,
        },
        4
      ).from(".icon", {
        duration: 1,
        y: -100,
        ease: "power3.out",
      });
    }, el);

    return () => {
      ctx.revert();
    };
  });
  return (
    <>
      <section id="home" ref={el}>
        <div className="home-bg"></div>
        <div className="home">
          <Container>
            <div className="home-content">
              <div className="headline">
                <h2>Hi , my name is</h2>
              </div>
              <div className="headline">
                <h1 className="display-1 fw-bold">Andrei Agmata.</h1>
              </div>
              <div className="headline">
                <h3 className="lead">
                  A web and software developer that values
                </h3>
              </div>
              <div className="headline">
                <h3 className="lead">user experience</h3>
              </div>

              <div className="learnMoreContainer">
                <div className="learnMoreContents">
                  <IconContext.Provider value={{ size: 100 }}>
                    <div className="icon">
                      <a href="#about">
                        <MdExpandMore fill="white" />
                      </a>
                    </div>
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
