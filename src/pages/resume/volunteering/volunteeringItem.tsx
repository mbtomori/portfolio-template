import React from 'react';
import { Card } from "react-bootstrap";
import { VolunteerInterface } from "../../../models/resume/volunteerInterface";

interface VolunteeringItemProps {
    volunteering: VolunteerInterface;
}

export const VolunteeringItem: React.FC<VolunteeringItemProps> = ({volunteering}) => {

    const { organization, organizationURL, title, startDate, endDate } = volunteering;

    return (
        <>
                <Card className="col-md-3 mx-2 text-center mb-2">
                    <Card.Header className="py-2">
                        <h5 className="text-dark-emphasis">{organization}</h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="py-2 text-primary">{title}</Card.Subtitle>
                        <Card.Link href={organizationURL} className="ps-0 text-secondary">{organization}</Card.Link>
                    </Card.Body>
                    <Card.Footer className="py-2 text-muted">{startDate}-{endDate}</Card.Footer>
                </Card>

        </>
    );
};