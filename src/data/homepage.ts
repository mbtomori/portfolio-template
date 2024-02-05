import {HomepageInterface} from "../models/homepageInterface";

/* @Todo Update the homepage information.
   - You can link to different sections by updating the button information.
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
