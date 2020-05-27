import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import heroImg from '../assets/images/hero.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Hero() {
    return (
        <Row className="colorful-border bottom">
            <Col className="px-0">
                <Container className="hero d-flex section flex-column overflow-hidden " fluid>
                    <Row className="">
                        <Col className="hero-img px-0">
                            <LazyLoadImage
                                alt={"Maya in her Graduation Gown"}
                                effect="blur"
                                src={heroImg} />
                        </Col>
                        <Col className="hero-copy d-flex flex-column justify-content-center align-items-center p-4">
                            <h1 className="display-3 text-left">
                                She believed<br/> she could,<br/> and she
                                <span className="text-underline-danger"> did.</span>
                            </h1>
                            <h3 className="name mt-3 ">Maya Brewer Shabazz</h3>
                            <p className="class font-weight-bold">Class of 2020</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Hero;