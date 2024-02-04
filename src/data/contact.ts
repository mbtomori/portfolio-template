import { ContactInterface } from "../models/contactInterface";

/* @Todo: Update your contact information for the contact page.
*/
export const contactData: ContactInterface = {
    name: 'Your Name',
    imageURL: "/images/profile_img.png",
    location: 'City, State',
    region: 'Region Name',
    email: 'Your email',
    phone: 'Your phone',
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
