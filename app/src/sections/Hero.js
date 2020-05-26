import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import heroImg from '../assets/images/hero.gif'

function Hero() {
    return (
        <Row>
            <Col className="px-0">
                <Container className="hero d-flex flex-column pt-3" fluid>
                    <Row>
                        <Col className="hero-img px-0">
                            <img src={heroImg} alt="Maya in her Graduation Gown"/>
                        </Col>
                        <Col className="hero-copy d-flex flex-column justify-content-center align-items-center px-3">
                            <h1 className="display-2 text-white text-left mb-3">She believed<br/> she could,<br/> so she did.</h1>
                        </Col>
                    </Row>

                </Container>
            </Col>
        </Row>
    );
}

export default Hero;