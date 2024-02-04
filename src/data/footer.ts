import {FooterInterface} from "../models/footerInterface";
import { faStar } from "@fortawesome/free-regular-svg-icons";

/* @Todo: Update the footer content.
   - Import a different fontawesome icon by replacing faStar. You may need to update the "from" location if you
     select a different style (ex. solid) icon.
*/

export const footerData: FooterInterface = {
    icon: faStar,
    quote: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. `,
    author: "- Lorem Ipsum",
}
