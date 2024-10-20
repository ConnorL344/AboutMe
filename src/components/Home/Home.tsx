import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import { projects } from '../../removeWithBe/dummyData';
import './Home.css';

export default function Home() {
  return (
    <Container fluid className="py-2">
      <Row className="responsive-stack">
        {projects.map((project) => (
          <Col key={project.id}>
            <Cards {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
