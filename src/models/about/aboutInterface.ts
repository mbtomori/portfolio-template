import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface AboutInterface {
    id: number;
    heading?: string;
    imageURL: string | IconProp;
    paragraphs: string[];
}
