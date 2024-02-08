import { CardInterface } from "../../models/homepage/cardInterface";
import { faPersonChalkboard, faPenToSquare, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// import regular icons using import { iconName } from "@fortawesome/free-regular-svg-icons";

/* @Todo Update the cards on the homepage.
    - Import different icons on Fontawesome, and add the relevant import (solid or regular) above.
    - Upload images of your work in the public/images folder. Update the imageURL.
    - The design fits three cards.
*/

export const cards: CardInterface[] =
[
    {
        id: '0',
        imageURL: '/images/example_img.png',
        imageCaption: 'Caption of previous image',
        title: 'Card Title',
        description: `Description`,
        iconName: faPenToSquare,
        backContent: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dui pulvinar gravida 
        congue. Morbi vitae sodales ex, at suscipit magna. Curabitur venenatis luctus turpis, et auctor lectus 
        faucibus sed. Integer libero dolor, suscipit sit amet mauris in, pellentesque egestas mauris.`,
        `In ultricies velit et luctus sodales. Phasellus vel elit quis diam interdum suscipit eget hendrerit ipsum. 
        Praesent porttitor dui nec velit aliquam, sed porta ipsum gravida. Nunc pulvinar consequat libero vitae 
        vulputate. Etiam in efficitur nisl. Sed tellus ipsum, fringilla vel rutrum sit amet, ultrices sit amet nulla. 
        Phasellus ut consequat lacus. Maecenas posuere vehicula iaculis.`],
        contentURL: "./about",
        contentTitle: "URL Title",
    },
    {
        id: '1',
        imageURL: '/images/example_img.png',
        imageCaption: 'Caption of previous image',
        title: 'Card Title',
        description: `Description`,
        iconName: faLaptopCode,
        backContent: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dui pulvinar gravida 
        congue. Morbi vitae sodales ex, at suscipit magna. Curabitur venenatis luctus turpis, et auctor lectus 
        faucibus sed. Integer libero dolor, suscipit sit amet mauris in, pellentesque egestas mauris.`,
        `In ultricies velit et luctus sodales. Phasellus vel elit quis diam interdum suscipit eget hendrerit ipsum. 
        Praesent porttitor dui nec velit aliquam, sed porta ipsum gravida. Nunc pulvinar consequat libero vitae 
        vulputate. Etiam in efficitur nisl. Sed tellus ipsum, fringilla vel rutrum sit amet, ultrices sit amet nulla. 
        Phasellus ut consequat lacus. Maecenas posuere vehicula iaculis.`],
        contentURL: "./about",
        contentTitle: "URL Title",
    },
        {
        id: '2',
        imageURL: '/images/example_img.png',
        imageCaption: 'Caption of previous image',
        title: 'Card Title',
        description: `Description`,
        iconName: faPersonChalkboard,
        backContent: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dui pulvinar gravida 
        congue. Morbi vitae sodales ex, at suscipit magna. Curabitur venenatis luctus turpis, et auctor lectus 
        faucibus sed. Integer libero dolor, suscipit sit amet mauris in, pellentesque egestas mauris.`,
        `In ultricies velit et luctus sodales. Phasellus vel elit quis diam interdum suscipit eget hendrerit ipsum. 
        Praesent porttitor dui nec velit aliquam, sed porta ipsum gravida. Nunc pulvinar consequat libero vitae 
        vulputate. Etiam in efficitur nisl. Sed tellus ipsum, fringilla vel rutrum sit amet, ultrices sit amet nulla. 
        Phasellus ut consequat lacus. Maecenas posuere vehicula iaculis.`],
        contentURL: "./about",
        contentTitle: "URL Title",
    },
]