import React from 'react';
import {Col, Image} from "react-bootstrap";

interface URLImageProps {
    imageURL: string;
}

export const URLImage: React.FC<URLImageProps> = ({imageURL}) => {
    return (
        <Col sm={12} md={6} lg={4} className="w-auto pt-3">
            <Image src={imageURL} rounded/>
        </Col>
    );
};