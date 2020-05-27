import React from 'react';
import '../assets/scss/Memories.scss';
import {Container, Card, Row, Col} from "react-bootstrap";
import {memoriesArray} from "./MemoriesArray";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component';


function Memories() {
    return (
        <>
            <Row className="memories section py-5">
                <Col>
                    <Container>
                        <h2 className="display-4 text-center pb-4">#memories</h2>
                        <Carousel
                            slidesPerPage={3}
                            arrows
                            infinite
                            centered
                            keepDirectionWhenDragging
                            autoPlay={2000}
                            animationSpeed={1000}
                            breakpoints={{
                                350: {
                                    slidesPerPage: 1,
                                    arrows: false
                                },
                                500: {
                                    slidesPerPage: 2,
                                    arrows: false
                                },
                                750: {
                                    slidesPerPage: 3,
                                    arrows: false
                                }
                            }}
                        >
                            {memoriesArray.map((image, key) => {
                                return (
                                    <LazyLoadComponent
                                        visibleByDefault={true}
                                    >
                                        <Card key={key} className="rounded-0 pb-3 mx-1 mx-md-3 border-0 shadow">
                                            <Card.Img variant="top" src={image} />
                                        </Card>
                                    </LazyLoadComponent>
                                );
                            })}
                        </Carousel>
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default Memories;
