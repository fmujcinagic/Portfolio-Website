import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../materials/photos/Faris Mujcinagic-logos_white.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Third Year Computer Science Student"]; //, "Low-level Enthusiast"
    const period = 2000;

    const email = 'faris1306@hotmail.com';

    const handleClick = () => {
        console.log('connect'); // Logging the message
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(90);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Faris`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Third Year Computer Science Student", "Low", "3" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Presently pursuing a <strong>Computer Science</strong> degree program at <strong>Graz University of Technology in Austria. </strong>
                                        I possess a strong interest in the foundational aspects of computer science, with a particular focus on <strong>low-level programming</strong> and <strong>information security</strong>.</p>
                                    <p>Scroll down to experience more <span class="rotate-emoji">👨‍💻</span></p>
                                    <button onClick={handleClick} class="connect-button">Let's Connect <ArrowRightCircle size={25} /></button>
                                    {/* <button onClick={handleClickResume} class="download-button">Download Resume</button> */}
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}