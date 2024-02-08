import React from 'react';
import { Row } from "react-bootstrap";
import { volunteerInfo } from "../../../data/resume/volunteer";
import { VolunteeringItem } from "./volunteeringItem";


export const Volunteering = () => {

    return (
        <>
            <div className="album w-100">
                <h1>Volunteering</h1>
                <Row>
                    {volunteerInfo.map((info) => (
                        <VolunteeringItem
                            key={info.id}
                            volunteering={info}
                        />)
                    )}
                </Row>
            </div>
        </>
    );
};