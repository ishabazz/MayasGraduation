import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import heroImg from '../assets/images/hero.gif'

function Hero() {
    return (
        <Container className="hero d-flex flex-column h-100 pt-3" fluid>
            <Row className="">
                <Col className="hero-img px-0">
                    <img src={heroImg} alt="Maya in a Graduation Gown"/>
                </Col>
                <Col className="hero-copy d-flex flex-column justify-content-center align-items-center px-3">
                    <h1 className="display-3 text-white text-left mb-3">She believed<br/> she could,<br/> so she did.</h1>
                    <a className="btn btn-lg btn-danger">Sign my Yearbook</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;