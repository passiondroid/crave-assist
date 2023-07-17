"use client";

import React, {useEffect} from "react";
import styles from "@/app/CheckoutButton.module.css";
import { useRouter } from 'next/navigation';

export const CheckoutButton = () => {
    const router = useRouter();
    useEffect(() => {
        const handleCheckout = () => {
            // Logic for handling checkout
            console.log('Checkout clicked');
        };

        const button = document.getElementById('checkoutButton');
        button?.addEventListener('click', handleCheckout);

        return () => {
            button?.removeEventListener('click', handleCheckout);
        };
    }, []);

    const handleCheckoutClick = () => {
        router.push('/checkout');
    };

    return (
        <div className={styles.checkoutButton}>
            <button id="checkoutButton" onClick={handleCheckoutClick}>Checkout</button>
        </div>
    );
};