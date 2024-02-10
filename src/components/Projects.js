// Disclaimer: Credits to DALL-E, for creating few of these icons that represent the corresponding Project Work
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../materials/photos/imhotep-the-duel-review-header-990x557.webp";
import projImg2 from "../materials/photos/malloc_realloc_photo.jpg";
import projImg3 from "../materials/photos/DALL·E 2024-02-10 01.09.00 - Create a portfolio website cover image with an emphasis on the word 'portfolio'. The design should be modern and professional, incorporating elements .webp";
import projImg4 from "../materials/photos/memoryCachePhoto.webp";
import projImg5 from "../materials/photos/DALL·E 2024-02-10 01.02.51 - Create an informative and schematic illustration for a Java Geospatial Project, featuring a stylized map as the central element. The design should inc.webp"
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
  const handleClickFourthProject = () => {
    window.location.href = 'https://github.com/fmujcinagic/SystemVerilog-MemoryCache';
  };
  const handleClickFifthProject = () => {
    window.location.href = 'https://github.com/fmujcinagic/JavaGeoREST';
  };

  const projects = [
    {
      title: "Custom Memory Cache",
      description: "Custom Instruction and Data Cache implemented in SystemVerilog.",
      imgUrl: projImg4,
      handleClick: handleClickFourthProject,
    },
    {
      title: "Custom malloc() Implementation",
      description: "A custom implementation of the malloc(), calloc() and free(), along with the 'new' and 'delete' operators.",
      imgUrl: projImg2,
      handleClick: handleClickSecondProject,
    },
    {
      title: "Imhotep: The Duel",
      description: "Simulation of the popular board game, where players take on the roles of Nefertiti and Akhenaten, one of Egypt's most famous royal couples.",
      imgUrl: projImg1,
      handleClick: handleClickFirstProject,
    },
    {
      title: "Geospatial Application",
      description: "A geospatial processing application built with Java, utilizing a RESTful API and the Spring framework.",
      imgUrl: projImg5,
      handleClick: handleClickFifthProject,
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
                    <p>This section showcases my hands-on experience with low-level programming, including custom memory allocation and caching mechanisms, as well as ongoing security projects. You will also find evidence of my involvement in complex team projects developed during my university coursework, which address real-world problems. All source code is documented and available on <strong><a href="https://github.com/fmujcinagic">GitHub</a></strong>.</p>
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