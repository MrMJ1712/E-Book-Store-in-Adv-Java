import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import './style/speoff.css';

function SpecialOffer() {
    const navigate =  useNavigate();
  // State to store user's selected answers
  const [answers, setAnswers] = useState({
    question1: '',
  });
  const [bookdata, setBookdata] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();   
    const value = answers.question1;
    try {        
        axios.get(`http://localhost:9090/book/byCategory/${value}`)
        .then((response) => setBookdata(response.data));   
    } catch (error) {
        console.error('Error adding book', error);
    }
};
const handleBuyNow = (id) => {
    navigate(`/homepage/buynow/${id}`);
};
  // Handle change in selected answer
  const handleAnswerChange = (questionNumber, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: option
    }));
  };

  return (
    <div className="app3">
    <Container id='cont'>
        <br />
      <div className="question" style={ { border: '2px solid black', padding: '20px', borderRadius:'20px' } }>
      
        <h3>1. What genre of books do you typically enjoy reading the most?</h3>
        <label>
          <input
            type="radio"
            name="question1"
            value="Thriller"
            checked={answers.question1 === 'Thriller'}
            onChange={() => handleAnswerChange('question1', 'Thriller')}
          />
          Thriller
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question1"
            value="Comics"
            checked={answers.question1 === 'Comics'}
            onChange={() => handleAnswerChange('question1', 'Comics')}
          />
          Comics
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question1"
            value="Auto Biography"
            checked={answers.question1 === 'Auto Biography'}
            onChange={() => handleAnswerChange('question1', 'Auto Biography')}
          />
          Auto Biography
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question1"
            value="Programming"
            checked={answers.question1 === 'Programming'}
            onChange={() => handleAnswerChange('question1', 'Programming')}
          />
          Programming
        </label>
        
      </div>
      <br />
      <div className="question" style={ { border: '2px solid black', padding: '20px', borderRadius:'20px' } }>

        <h3>2. Are there any specific authors or book series that you're currently interested in?</h3>
        <label>
          <input
            type="radio"
            name="question2"
            value="Yes"
            checked={answers.question2 === 'Yes'}
            onChange={() => handleAnswerChange('question2', 'Yes')}
          />
          Yes
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question2"
            value="No"
            checked={answers.question2 === 'No'}
            onChange={() => handleAnswerChange('question2', 'No')}
          />
          No
        </label>
        <br />
      </div>
      <br />
      <div className="question" style={ { border: '2px solid black', padding: '20px', borderRadius:'20px' } }>
        <h3>3. Which kind of books Would you prefer browsing?</h3>
        <label>
          <input
            type="radio"
            name="question3"
            value="Yes"
            checked={answers.question3 === 'Option 1'}
            onChange={() => handleAnswerChange('question3', 'Option 1')}
          />
          New Releases
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question3"
            value="Option 2"
            checked={answers.question3 === 'Option 2'}
            onChange={() => handleAnswerChange('question3', 'Option 2')}
          />
           Best Sellers
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="question3"
            value="Option 3"
            checked={answers.question3 === 'Option 3'}
            onChange={() => handleAnswerChange('question3', 'Option 3')}
          />
           Discounted Books
        </label>
        <br />
      </div>
      <br />
      <div id='butt'>
      <Button variant="primary" onClick={handleSubmit}>SUGGEST BOOK</Button>
      </div>
      

      <Row className="justify-content-md-center">
                    {bookdata.map((post) => {
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
  );
}
export default SpecialOffer;
