import { AboutInterface } from "../models/aboutInterface";
import { faPersonChalkboard, faPenToSquare, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/* @Todo: Update the about content.
   - Import different fontawesome icons by replacing the name of the icons in the import statements. You will
     need to ensure you are importing from the appropriate library (ex. solid or regular).
   - Add paragraphs by copying the section between two curly braces, adding the section to the bottom of the list before
     the closing square curly brace, and updating the id.
   - Remove paragraphs by deleting all content within and including the curly braces.
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
    }
]