import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Row, Col} from "react-bootstrap";
// import Picker from 'emoji-picker-react';
import StackGrid from "react-stack-grid";

import firebase from '../firebase.js';
import Message from "./Message";

function Yearbook() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [from, setFrom] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {

        const db = firebase.firestore();
        return db.collection("messages").onSnapshot((snapshot => {
            const messagesData = [];
            snapshot.forEach(document => messagesData.push(({...document.data(), id:document.id})))
            setMessages(messagesData);
        }));
    }

    const onCreate = (e) => {
        e.preventDefault();
        setDisabled(true);
        const db = firebase.firestore()
        db.collection("messages").add({name: from, message: newMessage}).then(ref => {
            setSaved(true);
            setTimeout(() => {
                setNewMessage("");
                setFrom("");
                setSaved(false);
                setDisabled(false);
            }, 1000);
        });
    }

    useEffect(fetchData, []);

    return (
        <Row className="colorful-border">
            <Container className="yearbook section my-5">
                <h2 className="text-center display-4">Sign my <span className="text-underline-danger">Yearbook.</span></h2>
                <Row className="mt-4 mb-5">
                    <Col md={{span:6, offset: 3}}>
                        <Form className="message form text-center p-4 shadow-sm" onSubmit={onCreate}>
                            <Form.Group as={Row} controlId="messageForm.from">
                                <Form.Label column xs={2}>From:</Form.Label>
                                <Col xs={10}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        required={true} />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="messageForm.message">
                            <textarea
                                className="form-control"
                                placeholder={"Congratulations Maya! 🥳"}
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                required={true}
                            />
                            </Form.Group>
                            <Form.Group controlId="messageForm.button">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={disabled}
                                >{saved ? "Saved" : "Leave a Message"}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <hr className="hr-sm mb-5"/>
                <StackGrid
                    columnWidth="50%"
                    gutterHeight={6}
                    className="messages-grid"
                >
                    {messages.map((message) => (
                        <Message key={message.id} message={message}/>
                    ))}
                </StackGrid>
            </Container>
        </Row>
    );
}

export default Yearbook;