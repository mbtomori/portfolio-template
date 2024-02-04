import React from 'react';
import { Card } from "react-bootstrap";
import { Education } from "../education/education";
import { SidebarContact } from "./contact";

export const Sidebar = () => {

    return (
        <Card className="sidebar min-vh-100 bottom-2 h-100">
            <SidebarContact />
            <Education/>
        </Card>
    );
};