import React from 'react';

import {Row, Container, Col} from "react-bootstrap";

function Graduation() {
    return (
        <Row className="section graduation">
            <Col>
                <Container className="my-5">
                    <h2 className="display-4 text-center">Watch me <span className="text-underline-danger">Graduate.</span></h2>
                </Container>
            </Col>
        </Row>
    )
}

export default Graduation;