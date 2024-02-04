import React from 'react';
import { Figure, Row, Col, FigureCaption } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerData } from "../data/footer";

export const Footer = () => {

    const {icon, quote, author} = footerData;

    return (
        <footer className="text-muted bg-dark w-100 mt-2 mt-auto d-flex pt-2 ps-2">
            <Figure className="py-2 text-white fw-lighter">
                <Row>
                    <Col sm={1} md={2} lg={1} className="ps-4">
                        <FontAwesomeIcon icon={icon} className="h-auto d-none d-md-block text-primary"/>
                    </Col>
                    <Col sm={9} md={10}>
                        <blockquote className="ps-sm-4 ps-md-0 blockquote">
                            <h5 className="fw-lighter text-primary">{quote}</h5>
                        </blockquote>
                        <FigureCaption className="text-light">{author}</FigureCaption>
                    </Col>
                </Row>
            </Figure>
        </footer>
    );
};