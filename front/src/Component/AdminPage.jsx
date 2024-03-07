import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function AdminPage() {

    const [showDialog, setShowDialog] = useState(false);

    const [selectedId, setSelectedId] = useState("");

    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Promises
    useEffect(() => {
        populateBookState();
    }, []);


    async function populateBookState() {
        try {
            axios
            .get("http://localhost:9090/book")
            .then((response) => setMyData(response.data))
            .catch((error) => setIsError(error.message));
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        try {
                await axios
                .delete(`http://localhost:9090/book/${selectedId}`)                
                populateBookState();
                closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateBookState();
    }, []);
    return (
        <>
            <Container>
                <br />
                <br />
                <Button size="lg" varient="primary" onClick={() => {
                    navigate(`/add-book`);
                }}>Add Book</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="lg" varient="primary" onClick={() => {
                    navigate('/purchase-history');
                }}>Purchase History</Button>
                <br />
                <br />
                <h1>List of Books.....</h1>
                {
                    <Table className="mt-4" border={1}>
                        <thead>
                            <tr>
                                <th>Book Id</th>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myData.map((post) => {
                                const { bookId, title, stock,author, price } = post;
                                return (
                                    <tr>
                                        <td>{bookId}</td>
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>{price}</td>
                                        <td>{stock}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedId(bookId);
                                                
                                            }}>Delete</Button>&nbsp;&nbsp;&nbsp;
                                            <Button varient="primary" onClick={() => {
                                            navigate (`/bookupdate/${bookId}`);
                                            }}>Update</Button>
                                        </td>
                                    </tr>
                                );
                            })}



                        </tbody>
                    </Table>

                }
                <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to delete Book with id {selectedId}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={() => {
                            handleDelete()
                        }
                        }>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDialog}>
                            NO
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Container>
        </>
    );
}