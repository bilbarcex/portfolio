import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import colorSharp from "../assets/image/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
        <Container>
            <Row>
                <Col >
                <div className='skill-bx'>
                    <h2>
                        My Skills
                    </h2>
                    <p>I am a passionate software developer with expertise in web and mobile development. With an educational background in Computer Science and work experience in the technology industry, I have the skills to implement creative and innovative solutions for client needs.
                        Furthermore, I have in-depth knowledge of mobile application development using Flutter.<br></br> I believe that a good user experience and appealing design are key to the success of an application.</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter1} alt='Image' />
                            <h5>Flutter Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='Image' />
                            <h5>Laravel Backend</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='Image' />
                            <h5>Laravel Frontend</h5>
                        </div>
                        <div className='item'>
                            <img src={meter1} alt='Image' />
                            <h5>Photograph and Photoshop</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} />
    </section>
    )
}