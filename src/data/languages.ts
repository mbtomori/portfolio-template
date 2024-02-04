import { LanguageInterface } from "../models/languageInterface";

/* @Todo Add languages (designed for programming languages) to your resume.
    - This defaults to 8 languages. Add languages by combining similar languages (HTML/CSS) or by adding a section
      between curly braces. Be sure to check that the title fits with the percentage.
    - To remove sections, delete sections between two curly braces (from the end) and update the percentages.
    - Display percentages must add up to 100.
    - Suggestion: order from best to least known.
*/
export const languages: LanguageInterface[] =
    [{
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