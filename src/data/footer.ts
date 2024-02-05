import {FooterInterface} from "../models/footerInterface";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// import solid icons using import { iconName } from "@fortawesome/free-solid-svg-icons";

/* @Todo: Update the footer.
   - Add the name of the desired icon to the relevant import (regular or solid) above.
   - Update the icon name below.
*/

export const footerData: FooterInterface = {
    icon: faStar,
    quote: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. `,
    author: "- Lorem Ipsum",
}
