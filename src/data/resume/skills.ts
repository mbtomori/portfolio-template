import { SkillInterface } from "../../models/resume/skillInterface";

/* @Todo Add general and technical skills to the relevant sections below.
   - Remove skill categories by deleting content within (and including) the curly braces.
   - Add skill categories by copying and pasting the template into the specified section below. Update the id.
   - Add skills to the list in between square brackets. Skills should be within quotation marks and separated by commas.
   ---------- Template Start -----------
   {
        id: 0, // update the id
        category: 'Category 1',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    ---------- Template End -----------
*/

export const generalSkills: SkillInterface[] =
[
    {
        id: 0,
        category: 'Category 1',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 1,
        category: 'Category 2',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 2,
        category: 'Category 3',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    // Add a new skills category here
]

export const technicalSkills: SkillInterface[] =
    [{
        id: 0,
        category: 'Category 1 (Ex. Technical Concepts)',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 1,
        category: 'Category 2 (Ex. Frameworks and Libraries)',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 2,
        category: 'Category 3 (Ex. Databases)',
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 3,
        category: "Category 4 (Ex. Tools)",
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    {
        id: 4,
        category: "Category 5 (Ex. Teamwork & Collaboration)",
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
    },
    // Add a new skills category here
]