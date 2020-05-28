import React from 'react';
import {format, fromUnixTime, getUnixTime} from 'date-fns';
import {formatToTimeZone} from 'date-fns-timezone';

import background from '../assets/images/afterparty.svg';

import {Row, Container, Col} from "react-bootstrap";

function WatchParty({watchParty = {link: "", timestamp: "", password: ""}, ceremony = {link: "", timestamp: "", password: ""}}) {
    return (
        <Row className="section watch-party mx-auto pb-4" style={{ backgroundImage: `url(${background})` }}>
            <Col>
                <Container className="my-4">
                    <h2 className="display-4 text-center">Watch me <span className="text-underline-danger">#graduate</span></h2>
                    <Row className="justify-content-center mb-sm-2 pt-4">
                        <Col md={5} sm={12} xs={12} className="ceremony invite text-center rounded mt-3 py-5">
                            {ceremony.timestamp !== "" && <p className="event-date font-weight-bold text-primary">{formatToTimeZone(fromUnixTime(ceremony.timestamp), "dddd MMMM DD, YYYY hh:mm a (z)", {timeZone: "America/Los_Angeles"})} </p>}
                            <p className="h1 mb-2">🎓</p>
                            <h3 className="h1 event-name text-white mb-4">Maya's Graduation Ceremony</h3>
                            {ceremony.link !== "" && <a target="_blank" href={ceremony.link} className="btn-info btn event-link">Link to the Ceremony</a>}
                            {ceremony.password !== "" && <p className="text-primary my-2 d-block">Password: <span className="text-underline">{ceremony.password}</span></p>}
                            {ceremony.link === "" && <p className="btn-info btn event-link">Come back later for link</p>}
                        </Col>
                        <Col></Col>
                        <Col md={6} sm={12} xs={12}  className="watch invite text-center rounded mt-3 py-5">
                            {watchParty.timestamp !== "" && <p className="event-date font-weight-bold text-primary">{formatToTimeZone(fromUnixTime(watchParty.timestamp), "dddd MMMM DD, YYYY hh:mm a (z)", {timeZone: "America/Los_Angeles"})} </p>}
                            <p className="h2 mb-2">🥳</p>
                            <h3 className="h1 event-name text-white mb-4">Maya's Graduation Watch Party</h3>
                            {watchParty.link !== "" && <a target="_blank" href={watchParty.link} className="btn-info btn event-link">Link to the Party</a>}
                            {watchParty.password !== "" && <p className="text-primary my-2 d-block">Password: <span className="text-underline">{watchParty.password}</span></p>}
                            {watchParty.link === "" && <p className="btn-info btn event-link">Come back later for link</p>}
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default WatchParty;