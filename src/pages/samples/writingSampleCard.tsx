import React from 'react';
import { Container, Card, ButtonGroup, Col, Button } from "react-bootstrap";
import { SampleInterface } from "../../models/samples/sampleInterface";

interface SampleItemProps {
    sample: SampleInterface;
}

export const WritingSampleCard: React.FC<SampleItemProps> = ({sample}) => {
    const currSample = {...sample}

    return (
        <>
            <Col lg={4}>
                <Container className="text-center py-5 bg-white">
                    <Card className="card mb-3">
                        <Card.Header className="card-header"><h4>{currSample.category}</h4></Card.Header>
                        <Card.Body className="card-body">
                            <h3 className="card-title">{currSample.title}</h3>
                            <h6 className="card-subtitle text-muted">{currSample.subtitle}</h6>
                        </Card.Body>
                        <Card.Img src={currSample.imageURL} className="d-block" width="100%"></Card.Img>
                        <Card.Body className="card-body text-body">
                            <Card.Text>{currSample.description}</Card.Text>
                            <Card.Text className="text-secondary fw-lighter">{currSample.requirement}</Card.Text>
                        </Card.Body>
                        <ButtonGroup>
                            {currSample.resource?.map((resource, index) => (
                                <Button
                                    key={index}
                                    href={resource.url}
                                    target="_blank"
                                    className="btn-primary mb-3 group-button"
                                >{resource.description}</Button>
                            ))}
                        </ButtonGroup>
                        <Card.Footer className="card-footer text-muted">
                            Written {currSample.dateWritten}
                        </Card.Footer>
                    </Card>
                </Container>
            </Col>
        </>
    );
};