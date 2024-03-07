import React from 'react';
import { useParams } from 'react-router-dom';
import { PurchaseReceipt } from './PurchaseReceipt';

function OrderConfirm() {
    const { customerId, bookId, quantity } = useParams();

    return (
        <div>
            <h1>Order Confirmation</h1>
            <PurchaseReceipt customerId={customerId} bookId={bookId} quantity={quantity} />
        </div>
    );
}

export default OrderConfirm;