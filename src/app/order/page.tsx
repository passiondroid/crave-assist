import React from 'react';
import styles from '../OrderDetailsPage.module.css';

const OrderDetailsPage = () => {
    const orderItems = [
        {
            name: 'Item 1',
            quantity: 2,
            price: '$10',
        },
        {
            name: 'Item 2',
            quantity: 1,
            price: '$15',
        },
        // Add more order items as needed
    ];

    const totalPrice = orderItems.reduce((total, item) => total + parseFloat(item.price.substring(1)) * item.quantity, 0);
    const orderNumber = generateOrderNumber(); // Replace with your logic to generate the order number

    return (
        <div className={styles.orderDetailsPage}>
            <h1 className={styles.title}>Order Details</h1>
            <div className={styles.orderNumber}>{orderNumber}</div>
            <div className={styles.orderSummary}>
                {orderItems.map((item, index) => (
                    <div key={index} className={styles.orderItem}>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.itemQuantity}>x{item.quantity}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                    </div>
                ))}
            </div>
            <div className={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
    );
};

const generateOrderNumber = () => {
    // Replace with your logic to generate the order number
    // Example: Generating a random order number
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
};

export default OrderDetailsPage;
