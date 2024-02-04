import React, { useState } from 'react';
import { Figure, Card, FigureCaption } from "react-bootstrap";
import { Link } from "react-router-dom"
import { CardInterface } from "../../models/cardInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CardProps {
    card: CardInterface;
}

export const CardComponent: React.FC<CardProps> = ({card}) => {

    const {imageURL, title, description, backContent, iconName, imageCaption, contentURL, contentTitle} = card;
    const [flip, setFlip] = useState(false)

    return (
        <>
            <div className="col-md-4 my-2">
                <Card className="mb-4 box-shadow h-100" onClick={() => setFlip(!flip)}>
                    {!flip && (
                        <div className="front">
                            <Card.Header className="text-center"><Card.Title>{title}</Card.Title></Card.Header>
                            <Figure>
                                <Card.Img variant="top" src={imageURL}/>
                                <FigureCaption className="text-center ps-2"><em>{imageCaption}</em></FigureCaption>
                            </Figure>
                            <Card.Body>
                                <Card.Text className="text-start pb-2">
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    )}
                    {flip &&
                        <div className="back">
                            <Card.Header className="text-center"><Card.Title>{title}</Card.Title></Card.Header>

                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={iconName} className="text-center fa-6x pb-2"/>
                                <Card.Text className="text-start pb-2">
                                    {backContent.map((paragraph) => (
                                        <p key={paragraph} className="border-info">
                                            {paragraph}
                                        </p>
                                    ))}
                                    <Link to={contentURL} className="text-decoration-none">{contentTitle}</Link>
                                </Card.Text>

                            </Card.Body>
                        </div>
                    }
                </Card>
            </div>
        </>
    );
};