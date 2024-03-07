
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export function UpdateBook() {

    const params = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ bookId: "", title: "", price:"",author: "", stock: "", description: "", category:"" });

    const [isUpdated, setIsUpdated] = useState(false);

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put(`http://localhost:9090/book/${params.id}`,formData);
            setIsUpdated(true);
            navigate("/adminpage");
            console.log(result);

        } catch (error) {
            console.log(error)
        }
    }

    const populateBookState = async () => {
        try {
            const result = await axios.get(`http://localhost:9090/book/${params.id}`);
            // console.log(result);
            setFormData(result.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateBookState();
        console.log("data fetched..");
    }, []);

    return (
        <>
            <Container>
               
                <Row>
                    {formData.bookId == params.id
                        ?
                        <Form onSubmit={handleSubmit} className="formContainer">

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Id </Form.Label>
                                    <Form.Control type="number" value={formData.bookId} name="bookId" readOnly />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Title</Form.Label>
                                    <Form.Control type="text" value={formData.title} name="title" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Author</Form.Label>
                                    <Form.Control type="text" value={formData.author}  name="author" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Price</Form.Label>
                                    <Form.Control type="number" value={formData.price}  name="price" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Stock</Form.Label>
                                    <Form.Control type="number" value={formData.stock}  name="stock" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Book Description</Form.Label>
                                    <Form.Control type="text" value={formData.description}  name="description" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group className="mb-3" >
                            <Form.Label>Category:</Form.Label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="Auto Biography">Auto Biography</option>
                        <option value="Comics">Comics</option>
                        <option value="Programming">Programming</option>
                        <option value="History">History</option>
                        <option value="Thriller">Thriller</option>                    
                    </select>
                    </Form.Group>
                    </Col>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit" >Update</Button>
                            </Col>
                        </Form> : <Alert variant="danger">Book not found for given Id ....</Alert>
                    }
                </Row>

                <Row className="mt-3">
                    <Col lg={3}>{
                        isUpdated ? <Alert variant="success"> Case Updated..</Alert> : null
                    }
                    </Col>
                </Row>
            </Container>
        </>
    );
}