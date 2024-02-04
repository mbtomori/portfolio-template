import React from 'react';
import { ListGroup } from "react-bootstrap";
import { EducationInterface } from "../../../models/educationInterface";
import { EducationRow } from "./educationRow";

interface EducationTableProps {
    educationList: EducationInterface[];
    heading: string;
}

export const EducationTable: React.FC<EducationTableProps> = ({educationList, heading}) => {

    return (
        <>
            <ListGroup className="my-3 mx-2">
                <h2 className="text-center text-dark-emphasis py-2">{heading}</h2>
                {educationList.map((education) => (
                    <EducationRow key={education.id} education={education}/>
                ))}

            </ListGroup>
        </>
    );
};