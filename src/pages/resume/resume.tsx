import React from 'react';
import { Sidebar } from "./sidebar/sidebar";
import { Skills } from "./skills/skills";
import { Row, Col } from "react-bootstrap";
import { Experience } from "./experience/experience";
import { Volunteering } from "./volunteering/volunteering";

export const Resume = () => {
    return (
        <>
            <Row className="vw-100 min-vh-100">
                <Col sm={12} md={6} lg={4}>
                    <Sidebar/>
                </Col>
                <Col sm={12} md={6} lg={8} className="px-4 pt-3">
                    <Experience/>
                    <Skills/>
                    <Volunteering />
                </Col>
            </Row>
        </>
    );
};