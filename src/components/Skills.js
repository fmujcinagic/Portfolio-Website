import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Programming Languages and Frameworks</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true}
                autoPlaySpeed={700}
              >
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                  <h5>PostgreSQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}