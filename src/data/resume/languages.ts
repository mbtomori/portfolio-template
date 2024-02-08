import { LanguageInterface } from "../../models/resume/languageInterface";

/* @Todo Add languages (designed for programming languages) to your resume.
    - This design supports 8 languages. Languages should be ordered from best to least known.
    - Update the displayPercent to approximate how well you know that language.
    - If you need more than eight languages, combine similar languages (HTML/CSS).
    - Ensure the title fits with the percentage.
    - To remove sections, delete the full language section including the curly brace.
    - Display percentages must add up to 100.
    - To remove this from the resume, delete the component from pages/resume/skills/skills.tsx
*/
export const languages: LanguageInterface[] =
[
    {
        id: 0,
        name: 'C/C++',
        displayPercent: 27,
    },
    {
        id: 1,
        name: 'Swift',
        displayPercent: 17,
    },
    {
        id: 2,
        name: "Java",
        displayPercent: 17,
    },
    {
        id: 3,
        name: "JavaScript",

        displayPercent: 15,
    },
    {
        id: 4,
        name: "Kotlin",
        displayPercent: 12,
    },
    {
        id: 5,
        name: "Python",
        displayPercent: 6,
    },
    {
        id: 6,
        name: "Ruby",
        displayPercent: 4,
    },
    {
        id: 7,
        name: "Go",
        displayPercent: 2,
    },
]