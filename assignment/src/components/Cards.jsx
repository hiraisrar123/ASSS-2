import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function Cards() {

  const imgRefs = useRef([]);

  const cardAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleMouseEnter = (index) => {
    const el = imgRefs.current[index];
    const boxHeight = el.parentElement.clientHeight;
    const imgHeight = el.scrollHeight;
    const move = imgHeight - boxHeight;

    if (move > 0) {
      gsap.to(el, {
        y: -move,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  };

  const handleMouseLeave = (index) => {
    gsap.to(imgRefs.current[index], {
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  const cards = [
    { img: "/card-1.jpg", title: "Share the experience" },
    { img: "/card-5.jpg", title: "The new art idea" },
    { img: "/card-4.jpg", title: "Different factors" },
    { img: "/card-1.jpg", title: "Share the experience" },
    { img: "/card-2.jpg", title: "The new art idea" },
    { img: "/card-6.jpg", title: "Different factors" },
    { img: "/card-9.jpg", title: "Different factors" },
    { img: "/card-1.jpg", title: "Share the experience" },
    { img: "/card-5.jpg", title: "The new art idea" },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">

          {cards.map((card, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm h-100">

                  {/* IMAGE WRAPPER */}
                  <div
                    className="overflow-hidden"
                    style={{ height: "260px" }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <img
                      ref={(el) => (imgRefs.current[index] = el)}
                      src={card.img}
                      className="w-100"
                      alt=""
                    />
                  </div>

                  <Card.Body className="text-center">
                    <Card.Title>{card.title}</Card.Title>
                  </Card.Body>

                </Card>
              </motion.div>
            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
}

export default Cards;
