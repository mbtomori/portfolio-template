import React from 'react';
import { Accordion } from "react-bootstrap";
import { experiences } from "../../../data/resume/experiences";
import { ExperienceItem } from './experienceItem'

export const Experience = () => {

    return (
        <>
            <h1>Experience</h1>
            <Accordion alwaysOpen>
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={experience.id}
                        experience={experience}
                    />)
                )}
            </Accordion>
        </>
    );
};