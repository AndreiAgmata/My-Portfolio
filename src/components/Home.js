import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdExpandMore } from "react-icons/md";

function Home() {
  return (
    <>
      <section id="home">
        <div className="header">
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

              <div className="learnMoreContainer">
                <div className="learnMoreContents">
                  <IconContext.Provider value={{ size: 80 }}>
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
