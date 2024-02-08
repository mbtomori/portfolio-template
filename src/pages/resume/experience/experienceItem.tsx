import React from 'react';
import { Accordion, Row, Col, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { ExperienceInterface } from "../../../models/resume/experienceInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from '@fortawesome/free-brands-svg-icons'



interface ExperienceItemProps {
  experience: ExperienceInterface;
}
export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
    const currExperience = {...experience}

    return (
            <Accordion.Item eventKey={currExperience.id}>
                <Accordion.Header>
                    <Row className="w-100 align-middle fw-medium">
                        <Col>{currExperience.title}</Col>
                        <Col className="text-center text-primary">
                            <a href={currExperience.companyURL} target="_blank"
                               className="text-primary text-decoration-none" rel="noreferrer">
                                {currExperience.company}</a>
                        </Col>
                        {
                            currExperience.imageURL === "faAws" &&
                            <Col className="text-center fs-5"><FontAwesomeIcon icon={faAws} style={{ color: 'orange' }} /></Col>
                        }
                        {
                            currExperience.imageURL !== "faAws" &&
                            <Col className="text-center fs-5">
                                <Image src={`${currExperience.imageURL}`} className="logo" />
                            </Col>
                        }

                    </Row>
                </Accordion.Header>
                <Accordion.Body>
                    <Row className="w-100 fw-medium text-dark-emphasis">
                        <Col className="align-content-center">Location: {currExperience.location}</Col>
                        <Col sm={6} lg={4} className="text-end me-2">{currExperience.startDate} - {currExperience.endDate}</Col>
                    </Row>
                    <h6 className="text-primary pt-2">Key Accomplishment</h6>
                    <ListGroup>
                        <ListGroupItem>{currExperience.keyAccomplishment}</ListGroupItem>
                    </ListGroup>
                    <h6 className="pt-2 text-primary">Other Responsibilities</h6>
                    <ul>
                        {currExperience.otherResponsibilities?.map((responsibility, index) => (
                        <li key={index} className="border-0">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
    );
}