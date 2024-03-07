import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Book4Image from './img/Book4.jpeg';

export const Book4 = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col xs={3}>
            <Card>
              <Card.Img variant="top" src={Book4Image} />
              <Card.Body>
                <Card.Title>Book 1</Card.Title>
                <p>Author: J.K.Rowling</p>
                <p>Published: January 1, 2023</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9}>
            <h4>Book Details</h4>
            <p>Harry Potter and the Philosopher's Stone" marked the beginning of a highly successful book series that gained immense popularity worldwide and was adapted into a successful film series.</p>
            <Button variant="primary">Add To Cart</Button><Button variant="primary">Buy Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Book4;