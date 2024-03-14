import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/image/yee.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Mobile Developer", "Backend Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const whatsappNumber = "6281351646768";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
     <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} className="text-start">
                <span className="tagline">Welcome to My Portfolio</span>
                <h1>{"Hi I'm Istaghnait Bilbarr"}</h1>
                <p>
                    <h2>
                    <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                    </span>
                    </h2>
                </p>
                <p>
                    Master's degree student in Information Systems. Skilled in JavaScript, PHP Laravel, Flutter(GetX, BLoC), MySQL, and Postman. Have a leadership spirit, can work as a team, know new knowledge and have organizational experience.
                </p>
                <button onClick={() => window.open(whatsappLink, "_blank")}>
                    Recruit Me<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
     </section>   
    )
}