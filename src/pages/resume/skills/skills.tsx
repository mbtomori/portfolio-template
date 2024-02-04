import React from 'react';
import { generalSkills, technicalSkills } from "../../../data/skills";
import { LanguageProgressComponent } from "./languageProgressComponent";
import { SkillsTable } from "./skillsTable";


export const Skills = () => {

    const generalHeaderNames = ['General', 'Skills'];
    const technicalHeaderNames = ['Concepts', '& Tools'];

    return (
        <>
            <SkillsTable skills={generalSkills} headerNames={generalHeaderNames}/>
            <h1>Technical Skills</h1>
            <LanguageProgressComponent/>
            <SkillsTable skills={technicalSkills} headerNames={technicalHeaderNames}/>
        </>
    );
};