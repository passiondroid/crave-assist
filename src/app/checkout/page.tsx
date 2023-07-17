"use client";

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../CheckoutPage.module.css';

// @ts-ignore
const CheckoutItem = ({ item }) => {
    return (
        <div className={styles.checkoutItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.details}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price}</div>
            </div>
        </div>
    );
};

const Page = () => {
    const router = useRouter();
    const checkoutItems = [
        {
            name: 'Item 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
            price: '$10',
        },
        {
            name: 'Item 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
            price: '$15',
        },
        // Add more checkout items as needed
    ];

    const totalPrice = checkoutItems.reduce((total, item) => total + parseFloat(item.price.substring(1)), 0);

    const handlePlaceOrder = () => {
        router.push('/order');
    }

    return (
        <div className={styles.checkoutPage}>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.checkoutList}>
                {checkoutItems.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                ))}
            </div>
            <div className={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</div>
            <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
    );
};

export default Page;
