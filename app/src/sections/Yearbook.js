import React, {useState} from 'react';

import {Container} from "react-bootstrap";

function Yearbook() {
    const [total, setTotal] = useState(0);

    return (
        <Container className="yearbook-section">
            <h2>Yearbook</h2>
        </Container>
    );
}

export default Yearbook;