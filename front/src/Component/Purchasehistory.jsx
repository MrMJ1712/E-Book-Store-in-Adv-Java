import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import './style/PurchaseHistory.css'; // CSS file for custom styles

export function PurchaseHistory() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate();

    async function populateHistory() {
        try {
            const order = await axios.get('http://localhost:9090/order-History');
            console.log(order.data);
            setOrders(order.data);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateHistory();
    }, []);

    return (
        <div className="table">
        <Container>
            <Button onClick={() => {
                navigate("/adminpage");
            }} className="mt-3">Back</Button>
            <h2 className="title">List of all your Purchased books</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                orders.length !== 0 ? (
                    <Table className="mt-5 table-container">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>BookID</th>
                            <th>Book Title</th>
                            <th>CustomerId</th>
                            <th>Customer Email</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((b, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <tr>
                                    <td>{b.receiptId}</td>
                                    <td>{b.book.bookId}</td>
                                    <td>{b.book.title}</td>
                                    <td>{b.customer.customerId}</td>
                                    <td>{b.customer.email}</td>
                                    <td>{b.quantity}</td>
                                    <td>{b.amount}</td>
                                </tr>
                            </CSSTransition>
                        ))}
                    </tbody>
                </Table>
                
                ) : <p>No books Found</p>
            )}

        </Container>
        </div>
    )
}
