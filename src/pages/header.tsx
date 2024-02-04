import React from 'react';
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { headerData } from "../data/header"
export const Header = () => {
 return (
     <Navbar className="navbar navbar-expand-lg bg-primary border-primary">
             <Row className="w-100">
                 <Col sm={3} className="justify-content-start ps-md-4 ps-lg-5 ps-sm-1 pt-1">
                     <Navbar.Brand className="text-white" href="/">{headerData.name}</Navbar.Brand></Col>
                 <Col md={1}></Col>
                 <Col sm={5} md={8} className="align-items-end justify-content-end">
                     <Nav className="align-items-end justify-content-end">
                         <Nav.Link className="nav-heading text-white"
                                   href={headerData.heading1.url}>{headerData.heading1.name}
                         </Nav.Link>
                         <Nav.Link className="text-white nav-heading"
                                   href={headerData.heading2.url}>{headerData.heading2.name}
                         </Nav.Link>
                         <Nav.Link className="text-white nav-heading"
                                   href={headerData.heading3.url}>{headerData.heading3.name}
                         </Nav.Link>
                         <Nav.Link className="text-white nav-heading"
                                   href={headerData.heading4.url}>{headerData.heading4.name}
                         </Nav.Link>
                     </Nav>
                 </Col>
             </Row>
     </Navbar>
 );
};