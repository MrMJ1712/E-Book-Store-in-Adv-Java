import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export function BooksByCategory() {
    let { category } = useParams();
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const navigate = useNavigate(); 
    useEffect(() => {
        axios
            .get(`http://localhost:9090/book/byCategory/${category}`)
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, [category]); 

    const handleBuyNow = (id) => {
        navigate(`/homepage/buynow/${id}`);
    };
    return (
        <>
            {isError && <h2>{isError}</h2>}
            {myData.length === 0 && !isError &&<h2>No books found for the category: {category}</h2>}
            {myData.length > 0 && (
                <Container style={{ height: '85vh' }}>
                    <Row className="justify-content-md-center">
                        {myData.map((post) => {
                            const { bookId, title, author, price } = post;
                            return (
                                <Col key={bookId} lg={3}>
                                    <Card className="mt-5">
                                        <Card.Img variant="top" src={`http://localhost:9090/book/fetch/coverImg/${bookId}`} />
                                        <Card.Body className="text-center">
                                            <Card.Title><strong>Title : </strong>{title}</Card.Title>
                                            <p><strong>Author : </strong>{author}</p>
                                            <p><strong>Price : </strong>{price}</p>
                                            <Button onClick={() => handleBuyNow(bookId)}>Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            )}
        </>
    );
}
