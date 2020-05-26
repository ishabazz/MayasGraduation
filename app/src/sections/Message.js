import React from 'react';
import {Card} from "react-bootstrap";
import Linkify from 'react-linkify';

function Message({message}) {
    return (
        <div className="message p-4 shadow-sm">
            <Linkify>{message.message}</Linkify>
            <p className="mb-0 text-primary mt-2 name">{message.name}</p>
        </div>
    );
}

export default Message;