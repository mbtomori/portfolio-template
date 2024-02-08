import React from 'react';
import { ProgressBar } from "react-bootstrap";
import { languages } from "../../../data/resume/languages";

export const LanguageProgressComponent = () => {

    return (
        <>
            <div>
                <h3>Programming Languages</h3>
                <ProgressBar id="skills" className="skills border-secondary">
                    <ProgressBar variant="primary" now={languages[0].displayPercent} key={languages[0].id} label={languages[0].name}/>
                    <ProgressBar variant="secondary" now={languages[1].displayPercent} key={languages[1].id} label={languages[1].name}/>
                    <ProgressBar variant="info" now={languages[2].displayPercent} key={languages[2].id} label={languages[2].name}/>
                    <ProgressBar striped variant="primary" now={languages[3].displayPercent} key={languages[3].id} label={languages[3].name}/>
                    <ProgressBar striped variant="secondary" now={languages[4].displayPercent} key={languages[4].id} label={languages[4].name}/>
                    <ProgressBar striped variant="info" now={languages[5].displayPercent} key={languages[5].id} label={languages[5].name}/>
                    <ProgressBar variant="primary" now={languages[6].displayPercent} key={languages[6].id} label={languages[6].name}/>
                    <ProgressBar variant="secondary" now={languages[7].displayPercent} key={languages[7].id} label={languages[7].name}/>
                </ProgressBar>
            </div>
        </>
    );
};