import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import heroImg from '../assets/images/hero.gif'
import bottomPattern from '../assets/images/bottompattern.svg';
import topPattern from '../assets/images/toppattern.svg';

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
                            <img className="top" src={bottomPattern} alt="top pattern"/>
                            <h1 className="display-2 text-white text-left mb-3">She believed<br/> she could,<br/> so she did.</h1>
                            <img className="bottom" src={topPattern} alt="bottom pattern"/>
                        </Col>
                    </Row>

                </Container>
            </Col>
        </Row>
    );
}

export default Hero;