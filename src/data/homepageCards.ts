import { CardInterface } from "../models/cardInterface";
import { faPersonChalkboard, faPenToSquare, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

/* @Todo Update the card information on the homepage.
    - To update the icons, find free icons on Fontawesome, and add the names to the import statement above.
      Use the names in the iconName section. These are from the solid library.
      - Update solid to regular if you use a regular icon.
    - Add images of your work to the public/images folder and link to them in the imageURL section.
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