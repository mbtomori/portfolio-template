import React from 'react';
import { ListGroup, Badge, Row, Col } from "react-bootstrap";
import { EducationInterface } from "../../../models/resume/educationInterface";

interface EducationItemProps {
    education: EducationInterface;
}

export const EducationRow: React.FC<EducationItemProps> = ({education}) => {

    const {name, institution, url, date} = education;

    return (
        <>
            <ListGroup.Item as="li" className="p-2">
                <Row className="pb-2">
                    <Col md={7} className="ps-3 fw-medium">{name}</Col>
                    <Col md={5} className="align-items-end text-end">
                        <Badge bg="primary" className="text-dark-emphasis fs-6 me-3" pill>{date}</Badge>
                    </Col>
                </Row>
                <Row className="ps-3">
                    <a href={url} className="ps-0 text-primary text-decoration-none">{institution}</a>
                </Row>
            </ListGroup.Item>
        </>
    );
};