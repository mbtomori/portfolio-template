import React from 'react';
import { Container, Row } from "react-bootstrap";
import { WritingSampleCard } from "./writingSampleCard";
import { samples } from "../../data/samples/samples";

export const Samples = () => {

 return (
     <>
      <Container className="text-center py-5 bg-white">
          <Row><h1>Writing Samples</h1></Row>
          <Row>
              {samples.map((sample) => (
          <WritingSampleCard key={sample.id} sample={sample} />
        ))}
          </Row>
      </Container>
     </>
 );
};