import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Cards() {
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">

          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x300"
              />
              <Card.Body className="text-center">
                <Card.Title>Share the experience</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x300"
              />
              <Card.Body className="text-center">
                <Card.Title>The new art idea</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x300"
              />
              <Card.Body className="text-center">
                <Card.Title>Different factors</Card.Title>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Cards;
