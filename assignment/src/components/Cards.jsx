import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Cards() {
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">

<Col lg={4} md={6} data-aos="fade-up">
           <Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-1.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Share the experience</Card.Title>
              </Card.Body>
            </Card>
          </Col>

<Col lg={4} md={6} data-aos="fade-up">
          <Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-5.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>The new art idea</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-4.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Different factors</Card.Title>
              </Card.Body>
            </Card>
          </Col>


          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-1.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Share the experience</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-2.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>The new art idea</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card">
              <Card.Img
                variant="top"
                src="public/card-6.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Different factors</Card.Title>
              </Card.Body>
            </Card>
          </Col>

   
          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card move-right">
              <Card.Img
                variant="top"
                src="public/card-7.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Share the experience</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card move-right">
              <Card.Img
                variant="top"
                src="public/card-8.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>The new art idea</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
<Card className="border-0 shadow-sm h-100 custom-card move-right">
              <Card.Img
                variant="top"
                src="public/card-9.jpg"
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
