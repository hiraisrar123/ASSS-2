import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Cards() {

  // animation settings
  const cardAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">

          {/* Card 1 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-1.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Share the experience</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 2 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-5.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>The new art idea</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 3 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-4.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Different factors</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 4 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-1.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Share the experience</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 5 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-2.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>The new art idea</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 6 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-6.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Different factors</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 7 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-7.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Share the experience</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 8 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-8.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>The new art idea</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Card 9 */}
          <Col lg={4} md={6}>
            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-sm h-100 custom-card">
                <Card.Img variant="top" src="public/card-9.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Different factors</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Cards;
