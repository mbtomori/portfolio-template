import {HomepageInterface} from "../models/homepageInterface";

/* @Todo Update the information on the top of the homepage.
   - Link to different sections of your site by updating the URL to a different page.
*  */
export const homepageData: HomepageInterface = {
    heading: "Main Title",
    subHeading: "Subtitle",
    description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est`,
    firstButton: {
        buttonText: "Samples",
        buttonURL: "/samples"
    },
    secondButton: {
        buttonText: "Contact",
        buttonURL: "/contact"
    },
}
