import React, {useState} from 'react';

import {Container} from "react-bootstrap";

function Yearbook() {
    const [total, setTotal] = useState(0);

    return (
        <Container className="yearbook section">
            <h2 className="text-center display-2">Sign my <span className="text-underline-danger">Yearbook.</span></h2>
        </Container>
    );
}

export default Yearbook;