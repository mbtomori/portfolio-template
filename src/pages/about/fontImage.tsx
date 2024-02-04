import React from 'react';
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FontImageProps {
    iconName: IconProp;
}
export const FontImage: React.FC<FontImageProps> = ({iconName}) => {

    return (
        <>
            <Col lg={2} className="text-center">
                <FontAwesomeIcon icon={iconName} flip="horizontal"
                                 className="fa-10x text-secondary d-none d-lg-block"/>
            </Col>

        </>
    );

};