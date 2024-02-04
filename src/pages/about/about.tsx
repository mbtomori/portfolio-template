import React from 'react';
import { Container } from "react-bootstrap";
import { aboutDetails } from "../../data/about";
import { AboutItem } from "./aboutItem";

export const About = () => {

    return (
        <>
        <Container className="w-75 pt-3">
            <h1 className="text-center">About Me</h1>
            {aboutDetails.map((aboutDetail) => (
                    <AboutItem
                        key={aboutDetail.id}
                        aboutDetail={aboutDetail}
                    />)
                )}

        </Container>
        </>
    );
};