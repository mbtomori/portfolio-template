import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactData } from "../../../data/contact";
import { homepageData } from "../../../data/homepage";

export const SidebarContact = () => {

    const {imageURL, email, phone, linkedIn, github} = contactData;
    const { heading } = homepageData;

    return (
        <>
            <Card.Img variant="top" src={imageURL} className="p-2"></Card.Img>
            <Card.Title className="text-center text-dark-emphasis fs-1">{heading}</Card.Title>
            <Row className="p-2 justify-content-center">
                <Col sm={12} md={6} lg={3} className="text-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={() => window.location.href = `mailto:${email}`} className="link-underline">
                        <FontAwesomeIcon icon={faEnvelope} className="px-2 text-dark-emphasis fs-3 link-opacity-50-hover"/></a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center">
                    <a href={`tel:${phone}`}><FontAwesomeIcon icon={faPhone} className="px-2 fs-4 text-dark-emphasis"/></a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center"><a href={linkedIn.url}>
                    <FontAwesomeIcon icon={faLinkedin} className="px-2 fs-3 text-dark-emphasis"/></a>
                </Col>
                <Col sm={12} md={6} lg={3} className="text-center">
                    <a href={github.url}><FontAwesomeIcon icon={faGithub} className="px-2 fs-3 text-dark-emphasis"/></a>
                </Col>
            </Row></>
    );
};