import React from 'react';
import { Col, Row } from "react-bootstrap";
import { URLImage } from "./urlImage";
import { FontImage } from "./fontImage";
import { AboutItemProps } from "./aboutItem";

export const LeftRow: React.FC<AboutItemProps> = ({aboutDetail}) => {

    const {heading, imageURL, paragraphs} = aboutDetail;
    const isIconProp = typeof imageURL !== 'string';

    return (
        <>
            <Row className="w-100 align-items-center">
                {isIconProp && imageURL ? (
                    <FontImage iconName={imageURL} />

                ) : (
                    <URLImage imageURL={imageURL}/>
                )}
                <Col sm={12} md={12} lg={9} className="ps-lg-4 ms-lg-5">
                    <h3 className="py-3 text-primary">{heading}</h3>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="border-info">
                            {paragraph}
                        </p>
                    ))}
                </Col>
            </Row>
        </>
    );

};