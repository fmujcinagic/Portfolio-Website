import { Col } from "react-bootstrap";
import gitImage from '../materials/photos/30ka git.png'
export const ProjectCard = ({ title, description, imgUrl, handleClick}) => {


  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span><button onClick={handleClick}><img src={gitImage} alt='' /></button></span>
        </div>
      </div>
    </Col>
  )
}