import { Card, Col, Container, Row } from "react-bootstrap";
import About1 from './img/Tejaswini.jpg';
import About2 from './img/Laxmikant.jpg';
import About3 from './img/Pooja.jpg';
import About4 from './img/Kunal.jpeg';
import About5 from './img/Jayesh.jpeg';
import { Link } from "react-router-dom";


export function AboutUs() {
    return (
        <>
       
            <Container style={{ height: '85vh' }}>

                <Row className="justify-content-md-center">

                    <Col lg={2}>
                        <Card style={{ marginTop: '90px' }}>
                            <Card.Img variant="top" src={About1} />
                            <Card.Body>
                                <Card.Title>Tejaswini Maskare</Card.Title>
                                <div>Email : tejumaskare2001@gmail.com</div>
                                <Link to="https://www.linkedin.com/in/tejaswinimaskare/">TejaswiniLinkedin</Link>
                                <div>Phone : 9021399249</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card style={{ marginTop: '90px' }}>
                            <Card.Img variant="top" src={About2} />
                            <Card.Body>
                                <Card.Title>Laxmikant Mhamane</Card.Title>
                                <div>Email : laxmikant@gmail.com</div>
                                <Link to="https://rb.gy/67e4la">LaxmikantLinkedin</Link>
                                <div>Phone : 7389304143</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card style={{ marginTop: '90px' }}>
                            <Card.Img variant="top" src={About3} />
                            <Card.Body>
                                <Card.Title>Pooja Suryawanshi</Card.Title>
                                <div>Email : pooja@gmail.com</div>
                                <Link to="https://www.linkedin.com/in/piyush-harne-040088270/">PoojaLinkedin</Link>
                                <div>Phone : 8408855958</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card style={{ marginTop: '90px' }}>
                            <Card.Img variant="top" src={About4} />
                            <Card.Body>
                                <Card.Title>Kunal Chaudhari</Card.Title>
                                <div>Email : kunal@gmail.com</div>
                                <Link to="#">KunalLinkedin</Link>
                                <div>Phone : 1234567890</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card style={{ marginTop: '90px' }}>
                            <Card.Img variant="top" src={About5} />
                            <Card.Body>
                                <Card.Title>Jayesh Mahajan</Card.Title>
                                <div>Email : jayesh@gmail.com</div>
                                <Link to="#">JayeshLinkedin</Link>
                                <div>Phone : 9876543210</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    
                </Row>
            </Container>
        </>

    );
}
