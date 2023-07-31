import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../materials/photos/imhotep-the-duel-review-header-990x557.webp";
import projImg2 from "../materials/photos/malloc_realloc_photo.jpg";
import projImg3 from "../materials/photos/rsz_1screenshot_from_2023-07-29_11-25-31.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const handleClickFirstProject = () => {
    window.location.href = 'https://github.com/fmujcinagic/Imhotep-The-Duel';
  };
  const handleClickSecondProject = () => {
    window.location.href = 'https://github.com/fmujcinagic/Custom-malloc-Implementation';
  };
  const handleClickThirdProject = () => {
    window.location.href = 'https://github.com/fmujcinagic/Portfolio-Website';
  };

  const projects = [
    {
      title: "Imhotep: The Duel",
      description: "Simulation of the popular board game, where players take on the roles of Nefertiti and Akhenaten, one of Egypt's most famous royal couples.",
      imgUrl: projImg1,
      handleClick: handleClickFirstProject,
    },
    {
      title: "Custom malloc() Implementation",
      description: "A custom implementation of the malloc(), calloc() and free(), along with the 'new' and 'delete' operators.",
      imgUrl: projImg2,
      handleClick: handleClickSecondProject,
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website was made using HTML5, CSS3, JavaScript and React.",
      imgUrl: projImg3,
      handleClick: handleClickThirdProject,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col lg={{ span: 20, offset: 0 }}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx wow zoomIn">
                    <h2>Projects</h2>
                    <p>I have been actively engaged in a range of challenging individual and group projects that have allowed me to deepen my knowledge of Object-Oriented Programming (OOP) concepts.
                      Besides that, I have demonstrated proficiency in implementing low-level functionalities using C language and Assembly, showcasing my understanding of computer architecture and system-level programming.
                      Additionally, I have leveraged Python to develop various programs and scripts, which have enabled me to apply the language effectively for practical problem-solving scenarios.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}