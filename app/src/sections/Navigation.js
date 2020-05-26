import React from 'react';
import {Nav, Container} from "react-bootstrap";

function Navigation() {
    return (
        <Container>
            <Nav className="justify-content-between">
                <Nav.Item>
                    <Nav.Link href="#">Watch me Graduate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Join the #afterParty</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <img src="https://placekitten.com/40/40" alt="logo"/>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Memories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Sign my Yearbook</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Navigation;