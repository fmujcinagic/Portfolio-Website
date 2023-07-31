import { Container, Row, Col } from "react-bootstrap";
import logo from "../materials/photos/Faris Mujcinagic-logos_white.png";
import navIcon1 from "../materials/photos/nav-icon1.svg";
import navIcon2 from "../materials/photos/github-mark-white.svg";
import navIcon3 from "../materials/photos/discord-white.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/faris-mujcinagic/'><img src={navIcon1} alt='' /></a>
              <a href='https://github.com/fmujcinagic'><img src={navIcon2} alt='' /></a>
              <a href='https://discord.com/users/951851924284645416'><img src={navIcon3} alt='' /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}