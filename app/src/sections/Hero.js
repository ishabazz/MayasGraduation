import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function Hero() {
    return (
        <Row className="colorful-border bottom">
            <Col className="px-0">
                <div className="hero">
                    <Row className="">
                        <div className="hero-img">
                        </div>
                        <div className="hero-copy">
                            <h1 className="display-3">
                                She believed<br/> she could,<br/> and she
                                <span className="text-underline-danger"> did.</span>
                            </h1>
                            <h3 className="name mt-3 ">Maya Brewer Shabazz</h3>
                            <p className="class font-weight-bold">Class of 2020</p>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Hero;