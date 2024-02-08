import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardInterface {
    id: string;
    imageURL: string;
    imageCaption: string;
    title: string;
    description: string;
    iconName: IconProp;
    backContent: string[];
    contentURL: string;
    contentTitle: string;
}