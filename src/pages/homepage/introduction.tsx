import React from 'react';
import { Button } from 'react-bootstrap';
import { homepageData } from "../../data/homepage";

export const Introduction = () => {

    return (
        <section className="jumbotron text-center py-5 bg-white">
            <div className="container">
                <h1>{homepageData.heading}</h1>
                <h2>{homepageData.subHeading}</h2>
                <div className="lead text-muted">{homepageData.description}</div>
                <section className="pt-4">
                    <Button type="button" href={homepageData.firstButton.buttonURL} className="btn btn-primary mx-2">
                        {homepageData.firstButton.buttonText}</Button>
                    <Button type="button" href={homepageData.secondButton.buttonURL} className="btn btn-secondary">
                        {homepageData.secondButton.buttonText}</Button>
                </section>
            </div>
        </section>
    );
};