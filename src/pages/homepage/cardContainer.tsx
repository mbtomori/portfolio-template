import React from 'react';
import { Container, Row } from "react-bootstrap"
import { cards } from "../../data/homepageCards";
import { CardComponent } from "./card";

export const CardContainer = () => {

    return (
        <>
            <Container className="container">
                <Row className="h-50">
                    {cards.map((card) => (
                        <CardComponent
                            key={card.id}
                            card={card}
                        />)
                    )}
                </Row>
            </Container>
        </>
    );
};