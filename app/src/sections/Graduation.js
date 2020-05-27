import React from 'react';

import {Row, Container, Col} from "react-bootstrap";
import { Player } from 'video-react';
import GraduationVideo from '../assets/images/graduation/graduation.mov'
// import background from '../assets/images/graduation/graduation.svg';


function Graduation() {
    return (
        <Row className="section graduation colorful-border">
            <Col>
                <Container className="my-5">
                    <h2 className="display-4 text-center mb-5">Watch me <span className="text-underline-danger">graduate</span></h2>
                    <Player
                        fluid={false}
                        width={350}
                        height={621.15}
                        src={GraduationVideo}
                    />
                    <div className="video-container">
                        <p className="text-success text-center">
                            <span className="d-block font-weight-bold">Laguna Creek High School</span>
                            <span className="d-block text-center">Class of 2020</span>
                        </p>
                    </div>
                </Container>
            </Col>
        </Row>
    )
}

export default Graduation;