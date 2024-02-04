import { VolunteerInterface } from "../models/volunteerInterface";
/*@Todo Update your volunteer experience on your resume.
   - Remove this section by deleting it on pages/resume.tsx
   - Rename this section (to awards, clubs, etc.) in pages/resume/volunteering/volunteering.tsx/
   - Add items by copying the content between curly braces and adding it at the bottom before the square brace.
     Update the id.
   - Remove items by deleting a section between (and including) the curly braces.
   - This page is designed for three items/experiences.
      - You may need to make updates to the styling to add or remove items.
*/
export const volunteerInfo: VolunteerInterface[] =
[
    {
        id: 0,
        organization: "Organization Name",
        organizationURL: "Organization URL",
        title: "Title/Work at the org",
        startDate: "Month YYYY",
        endDate: "Month YYYY or present",
    },
    {
        id: 1,
        organization: "Organization Name",
        organizationURL: "Organization URL",
        title: "Title/Work at the org",
        startDate: "Month YYYY",
        endDate: "Month YYYY or present",
    },
    {
        id: 2,
        organization: "Organization Name",
        organizationURL: "Organization URL",
        title: "Title/Work at the org",
        startDate: "Month YYYY",
        endDate: "Month YYYY or present",
    },
]