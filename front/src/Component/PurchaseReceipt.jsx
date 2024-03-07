import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

export function PurchaseReceipt() {
    const [receiptData, setReceiptData] = useState(null);
    const { customerId, bookId, quantityId } = useParams();
    useEffect(() => {
        async function generateReceipt() {
            try {
                const response = await axios.post(`http://localhost:9090/generate-receipt/${bookId}/${customerId}/${quantityId}`);
                console.log(response.data);
                setReceiptData(response.data);
            } catch (error) {
                console.error('Error generating receipt:', error);
            }
        }
        generateReceipt();
    }, []);

    return (
        <div>
            {receiptData ? (
                <Container>
                         <h3 className="text-center mt-5" ><strong>Payment Receipt</strong></h3>
                        <hr />
                       <Row>
                         <Col lg={4}>               
                             <h4><strong>Order Summary</strong></h4>
                           <p><strong>Order Date :</strong>{receiptData.purchaseDate}</p>
                         <p><strong>Order Total :</strong><FontAwesomeIcon icon={faIndianRupeeSign} />{receiptData.amount}</p>
                             <p><strong>Payment Mode :</strong>Cash on Delivery</p>
                           </Col>
                          <Col lg={4}>
                            <h4><strong>Customer Details</strong></h4>
                             <p>Name :  {receiptData.customer.customerName}</p>
                             <p>Contact No : 5697456884</p>
                            <p>Email : {receiptData.customer.email}</p>
                           </Col>               
                          <Col lg={4} >
                            <h4><strong>Shipping Address</strong></h4>
                             <p>Locality : {receiptData.customer.address.locality}</p>
                             <p>address : {receiptData.customer.address.area}</p>
                             <p>city : {receiptData.customer.address.city}</p>
                             <p>state : {receiptData.customer.address.state} , pincode :{receiptData.customer.address.pincode}</p>
                             <p>INDIA</p>
                           </Col>                
                         </Row>
                         <hr />
                         <Table striped bordered hover className="mt-5">
                           <thead>
                             <tr>                              
                               <th>Order ID</th>
                               <th>Book ID</th>
                               <th>Book Title</th>
                               <th>Unit Price</th>
                               <th>Quantity</th>
                               <th>Net Amount</th>
                     </tr>
                           </thead>
                           <tbody>               
                             <tr>                               
                               <td>{receiptData.receiptId}</td>
                               <td>{receiptData.book.bookId}</td>
                               <td>{receiptData.book.title}</td>
                               <td>{receiptData.book.price}</td>
                               <td>{receiptData.quantity}</td>
                               <td>{receiptData.amount}</td>
                             </tr>                
                             <tr>
                               <td colSpan={5}><strong>Total Amount</strong></td>
                               <td><strong>{receiptData.amount}</strong></td>
                             </tr>
                           </tbody>               
                         </Table>
                       </Container>
            ) : (
                <p>Loading receipt...</p>
            )}
        </div>
    );
}


