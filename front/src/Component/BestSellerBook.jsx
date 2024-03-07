import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style/bestseller.css';

export function BestSellerBook() {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:9090/book/")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);

    const handleBuyNow = (id) => {
        navigate(`/homepage/buynow/${id}`);
    };

    return (
        < >
            {isError !== "" && <h2>{isError}</h2>}
            <div className="home-container"> 
                <Container>
                    <Row className="justify-content-md-center">
                        {myData.map((post) => {
                            const { bookId, title, author, price } = post;
                            return (
                                <Col key={bookId} lg={3}>
                                    <Card className="mt-5 custom-card"> {/* Applied a custom class for card styling */}
                                        <Card.Img variant="top" src={`http://localhost:9090/book/fetch/coverImg/${bookId}`} />
                                        <Card.Body className="text-center">
                                            <Card.Title><strong>Title : </strong>{title}</Card.Title>
                                            <p><strong>Author : </strong>{author}</p>
                                            <p><strong>Price : </strong>{price}</p>                                                                               
                                            <Button onClick={() => { 
                                                handleBuyNow(bookId);
                                            }}>Buy Now</Button>                                       
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}
