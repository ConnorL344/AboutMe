import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export const ProjectsGrid = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A full-stack application",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "https://github.com/yourusername/project1"
    },
    // Add more projects
  ];

  return (
    <Container className="my-5">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 project-card">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.technologies.map(tech => (
                  <Badge bg="primary" className="me-2" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
