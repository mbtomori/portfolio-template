import React from 'react';
import { Introduction } from './introduction';
import { CardContainer } from './cardContainer';
import { Container } from "react-bootstrap";
export const Homepage = () => {
 return (
  <Container role="main" className="ms-4">
   <Introduction />
   <CardContainer />
  </Container>
 );
};