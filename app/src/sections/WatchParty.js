import React from 'react';
import {format} from 'date-fns';
import background from '../assets/images/afterparty.svg';

import {Row, Container, Col} from "react-bootstrap";

function WatchParty() {
    return (
        <Row className="section watch-party mx-auto pb-4" style={{ backgroundImage: `url(${background})` }}>
            <Col>
                <Container className="my-4">
                    <h2 className="display-4 text-center">Join the <span className="text-underline-danger">#afterparty</span></h2>
                    <Row className="justify-content-center pt-4">
                        <Col md={6} sm={10} xs={10} className="invite text-center rounded py-5">
                            <p className="event-date font-weight-bold text-primary">{format(new Date(), "eeee MMMM dd, yyyy hh:mm a")}</p>
                            <p className="h2 mb-2">🥳</p>
                            <h3 className="h1 event-name text-white mb-4">Be a part of my celebration</h3>
                            <a target="_blank" href="https://us02web.zoom.us/w/86209044783?tk=0ENeQsWZKxX7S-J5wOPCY3NYmzl6ldB8pgYuwx-6J3E.DQIAAAAUEnWhLxZlbnppTzMtd1M1T0VPQ0Fqai1WeHR3AAAAAAAAAAAAAAAAAAAAAAAAAAAA" className="btn-info btn event-link">Join the Watch Party Here</a>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default WatchParty;