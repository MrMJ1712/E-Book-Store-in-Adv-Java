import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function BuyNow() {
    const navigate = useNavigate();
    const params = useParams();

    const [formData, setFormData] = useState({ bookId: "", title: "", price:"", author: "", stock: "", description: "" });
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        async function populateBookState() {
            try {
                const result = await axios.get(`http://localhost:9090/book/${params.id}`);
                setFormData(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        populateBookState();
    }, [params.id]);

    function handleChange(e) {
        setQuantity(e.target.value);
    }

    async function handleSubmit() {
        try {
            const bookId = formData.bookId;
            const customerId = sessionStorage.getItem("customerId");
            const quantityId = quantity;
            navigate(`/purchase-receipt/${bookId}/${customerId}/${quantityId}`); // Navigate to purchase receipt page
        } catch (error) {
            console.error('Error generating receipt:', error);
        }
    }

    return (
        <div>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col lg={2}></Col>
                    <Col lg={4}> 
                        <img src={`http://localhost:9090/book/fetch/coverImg/${formData.bookId}`} alt="Book Cover" height={250} />
                    </Col>
                    <Col lg={4}>
                        <h4>{formData.title} </h4>
                        <h6>{formData.author}</h6>
                        <hr />
                        <h5><FontAwesomeIcon icon={faIndianRupeeSign} /> {formData.price}</h5>
                        <Col lg={3}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Quantity</Form.Label>
                                    <input type="number" name="quantity" value={quantity} onChange={handleChange}/>
                                </Form.Group>
                                <Button onClick={handleSubmit}>Confirm Order</Button>
                            </Form>
                        </Col>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default BuyNow;
