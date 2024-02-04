import React from 'react';
import { Container } from "react-bootstrap";
import { degrees, certifications } from "../../../data/education";
import { EducationTable } from "./educationTable";

export const Education = () => {

    const degreeHeading = "Education";
    const certificationHeading = "Additional Certifications";

    return (
        <>
            <Container>
                <EducationTable educationList={degrees} heading={degreeHeading}/>
                <EducationTable educationList={certifications} heading={certificationHeading}/>
            </Container>
        </>
    );
};