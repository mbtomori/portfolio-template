import { AboutInterface } from "../models/aboutInterface";
import { faPersonChalkboard, faPenToSquare, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/* @Todo: Update the about content.
   - Add fontawesome icons by adding the name to the relevant import statement (solid or regular).
   - Remove sections by deleting content within (and including) the curly braces.
   - Add a section by copying and pasting the template into the specified section below. Update the id.
   ---------- Template Start -----------
   {
        id: #, // update the id
        heading: 'Heading',
        imageURL: faPersonChalkboard,
        paragraphs: [`Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt.
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`],
    },
    ---------- Template End -----------
*/

export const aboutDetails: AboutInterface[] =
[
    {
        id: 0,
        heading: 'Heading 1',
        imageURL: faPersonChalkboard,
        paragraphs: [`Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`],
    },
    {
        id: 1,
        heading: 'Heading 2',
        imageURL: faLaptopCode,
        paragraphs: [`Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae. Lorem ipsum dolor sit 
        amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est sonet detraxit mediocritatem te. 
        Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. Ut veri melius oporteat sed. Legere 
        persius mentitum eu sed, est at`],
    },
        {
        id: 2,
        heading: 'Heading 3',
        imageURL: faPenToSquare,
        paragraphs: [`Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae. Lorem ipsum dolor sit 
        amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est sonet detraxit mediocritatem te. 
        Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. Ut veri melius oporteat sed. Legere 
        persius mentitum eu sed, est at`],
    },
    {
        id: 3,
        heading: 'Headiing 4',
        imageURL: faEnvelope,
        paragraphs: [`Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed.`],
    },
//  Add new section(s) here.
]