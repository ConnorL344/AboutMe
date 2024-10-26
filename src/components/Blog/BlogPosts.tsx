import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

export const BlogPosts = () => {
  const posts = [
    {
      title: "Getting Started with React",
      excerpt: "Learn the basics of React development",
      date: "2023-12-01",
      readTime: "5 min"
    },
    // Add more blog posts
  ];

  return (
    <Container className="my-5">
      <h2>Technical Insights</h2>
      <Row>
        {posts.map((post, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="blog-card h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <div className="text-muted">
                  {post.date} · {post.readTime} read
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
