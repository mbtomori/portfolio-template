import { EducationInterface } from "../models/educationInterface";

/* @Todo Add your Education and Certifications to the relevant sections below.
   - Remove sections by deleting content within (and including) the curly braces.
   - Add a section by copying and pasting the template into the specified section below. Update the id.
   ---------- Template Start -----------
   {
        id: 0, // update the id
        name: 'Degree',
        institution: "Institution Name",
        url: "Add the URL to your program here",
        date: "MM YYYY"
    },
    ---------- Template End -----------*/

export const degrees: EducationInterface[] =
[
    {
        id: 0,
        name: 'Degree',
        institution: "Institution Name",
        url: "Add the URL to your program here",
        date: "MM YYYY"
    },
    {
        id: 1,
        name: 'Degree',
        institution: "Institution Name",
        url: "Add the URL to your program here",
        date: "MM YYYY"
    },
    {
        id: 2,
        name: 'Degree',
        institution: "Institution Name",
        url: "Add the URL to your program here",
        date: "MM YYYY"
    },
    // Add another education experience here
]

export const certifications: EducationInterface[] =
    [{
        id: 0,
        name: 'Certificate Name',
        institution: "Institution Name",
        url: "Add URL to the credential program",
        date: "YYYY"
    },
    {
        id: 1,
        name: 'Certificate Name',
        institution: "Institution Name",
        url: "Add URL to the credential program",
        date: "YYYY"
    },
    {
        id: 2,
        name: 'Certificate Name',
        institution: "Institution Name",
        url: "Add URL to the credential program",
        date: "YYYY"
    },
    // Add another certificate experience here
]