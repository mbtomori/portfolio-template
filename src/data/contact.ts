import { ContactInterface } from "../models/contactInterface";

/* @Todo: Update your contact information for the contact page.
   - Add your profile image to the public/images directory. Update the imageURL.
   - Follow the phone number formats identified below.
*/
export const contactData: ContactInterface = {
    name: 'Your Name',
    imageURL: "/images/profile_img.png",
    location: 'City, State',
    region: 'Region Name',
    email: 'Your email',
    phone: 'XXXXXXXXXX',
    displayPhone: '(XXX) XXX-XXXX',
    linkedIn: {
        username: "in/your_username",
        url: "Add the url to your profile"
    },
    github: {
        username: "username",
        url: "Add the url to your profile"
    },
    message: `Add your message here instructing people on how to contact you.`,
}
