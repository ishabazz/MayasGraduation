import React from 'react';

import {Row, Container, Col} from "react-bootstrap";
import { Player } from 'video-react';
import GraduationVideo from '../assets/images/graduation/graduation.mov'


function Graduation() {
    return (
        <Row className="section graduation">
            <Col>
                <Container className="my-5">
                    <h2 className="display-4 text-center">Watch me <span className="text-underline-danger">Graduate.</span></h2>
                    <Player
                        fluid={false}
                        width={350}
                        height={350}
                        src={GraduationVideo}
                    />
                    <div className="video-container">
                        <p className="text-center">#mygraduation</p>
                    </div>
                </Container>
            </Col>
        </Row>
    )
}

export default Graduation;