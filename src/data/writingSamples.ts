import { SampleInterface } from "../models/sampleInterface";

/* @Todo Add your writing/work sample information below.
    - Add images in the public/images folder
    - Update the content
    - To add samples, copy and paste a section (between the curly braces) and add to the bottom before the closing
      square brace. Update the id.
    - To remove samples, delete everything content between (and including) the curly braces (near id and after dateWritten).
    - You can link up to three resources per sample. Add by copying a resource and adding it to the resource list.
    - Remove resources by deleting the description, URL, and surrounding curly braces
* */
export const writingSamples: SampleInterface[] =
[
    {
        id: 0,
        category: "Category Name",
        title: "Title",
        subtitle: "Subtitle",
        imageURL: "/images/example_img.png",
        description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`,
        resource: [
            {
                description: "Resource Name",
                url: "Link URL"
            },
            {
                description: "Resource Name",
                url: "Link URL"
            },
        ],
        dateWritten: "Month YYYY",
    },
    {
        id: 1,
        category: "Category Name",
        title: "Title",
        subtitle: "Subtitle",
        imageURL: "/images/example_img.png",
        description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`,
        resource: [
            {
                description: "Resource Name",
                url: "Link URL"
            },
            {
                description: "Resource Name",
                url: "Link URL"
            },
        ],
        dateWritten: "Month YYYY",
    },
    {
        id: 2,
        category: "Category Name",
        title: "Title",
        subtitle: "Subtitle",
        imageURL: "/images/example_img.png",
        description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`,
        resource: [
            {
                description: "Resource Name",
                url: "Link URL"
            },
            {
                description: "Resource Name",
                url: "Link URL"
            },
        ],
        dateWritten: "Month YYYY",
    },
    {
        id: 3,
        category: "Category Name",
        title: "Title",
        subtitle: "Subtitle",
        imageURL: "/images/example_img.png",
        description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`,
        resource: [
            {
                description: "Resource Name",
                url: "Link URL"
            },
            {
                description: "Resource Name",
                url: "Link URL"
            },
        ],
        dateWritten: "Month YYYY",
    },
    {
        id: 4,
        category: "Category Name",
        title: "Title",
        subtitle: "Subtitle",
        imageURL: "/images/example_img.png",
        description: `Lorem ipsum dolor sit amet, iriure fabellas expetendis sed ad, in modo summo mazim eos, est 
        sonet detraxit mediocritatem te. Ius tantas admodum tincidunt ut, te pro melius maluisset tincidunt. 
        Ut veri melius oporteat sed. Legere persius mentitum eu sed, est at veniam molestiae.`,
        resource: [
            {
                description: "Resource Name",
                url: "Link URL"
            },
            {
                description: "Resource Name",
                url: "Link URL"
            },
        ],
        dateWritten: "Month YYYY",
    },
]