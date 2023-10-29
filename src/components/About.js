import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col lg={{ span: 20, offset: 0 }}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="skill-bx wow zoomIn">
                                        <h2>About Me</h2>
                                        <p>Let me introduce myself <span class="up-down-emoji">🤝</span></p>
                                        <div>
                                            <p>During high school, I discovered my passion for engineering and actively pursued it through participation in <strong>programming, mathematics, and physics</strong> competitions at the state level. Through these experiences, I achieved notable results and developed my problem-solving, analytical thinking, and teamwork skills.
                                                I continued to pursue my passion for engineering by enrolling in a <strong>Computer Science</strong> degree program at <strong> Graz University of Technology in Austria.</strong>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                I like to spend my time working on personal projects, one of which is this website! 
                                                Moreover, I am enhancing my cybersecurity skills through extracurricular participation in CTF challenges (identifying security vulnerabilities in IT systems) on <strong><a href="https://www.hackthebox.com/">HackTheBox</a></strong>, <strong><a href="https://tryhackme.com/">TryHackMe</a></strong> and <strong><a href="https://www.vulnhub.com/">VulnHub</a></strong> websites.
                                                In the future, I hope to further explore my interests and continue gaining experience in a variety of sectors of computer engineering.
                                            </p>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}
