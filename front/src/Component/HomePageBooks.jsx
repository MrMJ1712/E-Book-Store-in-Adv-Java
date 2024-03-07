import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
export function HomePageBooks() {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    
    const navigate = useNavigate();

    // const[id,setId]= useState();

    // using Promises
    useEffect(() => {
        axios
            .get("http://localhost:9090/book")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);

    const handleBuyNow = (id) => {
      
        // Add logic here to perform any actions before redirection if needed
        // For example, you can send an API request to initiate the purchase

        // Redirect to the "buynow" route with the appropriate parameter
        navigate(`/homepage/buynow/${id}`);
    };
    

    return (
        <>
    <Carousel className="mt-2" >
      <Carousel.Item>
      <img src={img1} alt="" />      
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="" />
      </Carousel.Item>
    </Carousel >
            {isError !== "" && <h2>{isError}</h2>}
            <div className="homecontainer">
            <Container>
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

