import React from 'react';
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { contactData } from "../../data/contact/contact";

export const Contact = () => {

    const {imageURL, email, phone, displayPhone, linkedIn, github, message} = contactData;

    return (
        <Container className="py-5 text-center justify-items-center w-50">
            <Card>
                <Card.Header className="justify-content-md-center text-center"><h1>Contact</h1></Card.Header>
                <Card.Img src={imageURL}></Card.Img>
                <Card.Body>{message}</Card.Body>
                <ListGroup className="text-center">
                    <ListGroupItem className="list-group-item-primary">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={() => window.location.href = `mailto:${email}`} className="text-body">
                            <FontAwesomeIcon icon={faEnvelope} className="pe-2"/>{email}</a>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item-light">
                        <a href={`tel:${phone}`} className="text-body">
                            <FontAwesomeIcon icon={faPhone} className="pe-2"/>{displayPhone}</a>
                    </ListGroupItem>
                    <ListGroupItem className="list-group-item-primary">
                        <a href={linkedIn.url} className="text-body">
                            <FontAwesomeIcon icon={faLinkedin} className="pe-2"/>{linkedIn.username}</a></ListGroupItem>
                    <ListGroupItem className="list-group-item-light">
                        <a href={github.url} className="text-body">
                            <FontAwesomeIcon icon={faGithub} className="pe-2"/>{github.username}</a></ListGroupItem>
                </ListGroup>
            </Card>
        </Container>
    );
};