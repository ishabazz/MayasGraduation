import React from 'react';
import {Row, Col, Container} from "react-bootstrap";

function Fund() {
    return (
        <Row className="section fund mx-auto">
            <Col>
                <Container className="my-3">
                    <Row className="justify-content-center">
                        <Col className="notice text-center rounded py-3">
                            <h3 className="h1 event-name text-white mb-2">Congrats & Happy 18th Birthday!</h3>
                            <p>Help make Maya's graduation and 18th birthday special.</p>
                            <a href="https://www.plumfund.com/graduation-fund/mayas-graduationbirthday-fund" className="btn-success btn event-link">Support Maya's Fund</a>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Fund;