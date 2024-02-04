import React from 'react';
import { Container } from "react-bootstrap";
import { AboutInterface } from "../../models/aboutInterface";
import {LeftRow} from "./leftRow";
import {RightRow} from "./rightRow";

export interface AboutItemProps {
    aboutDetail: AboutInterface;
}

export const AboutItem: React.FC<AboutItemProps> = ({aboutDetail}) => {

    const { id } = aboutDetail;
    const imgLocation = id % 2 === 0 ? 'imgLeft' : 'imgRight';

    return (
        <>
        <Container className="py-3">
                {/*<LeftRow aboutDetail={aboutDetail}/>*/}
            { imgLocation === 'imgLeft' &&
                <LeftRow aboutDetail={aboutDetail}/>
            }
            { imgLocation === 'imgRight' &&
                <RightRow aboutDetail={aboutDetail}/>
            }
        </Container>
        </>
    );

};