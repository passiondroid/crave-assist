"use client";

import React, { useState } from 'react';
import styles from './MenuList.module.css';
import {MenuItem} from "@/app/MenuItem";
import {router} from "next/client";

// @ts-ignore
const Menu = ({item}) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(0);
        }
    };

    return (
        <div className={styles.menuItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.details}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price}</div>
            </div>
            {quantity === 0 ? (
                <button className={styles.addButton} onClick={handleAdd}>
                    Add
                </button>
            ) : (
                <div className={styles.counter}>
                    <button className={styles.counterButton} onClick={handleRemove}>
                        -
                    </button>
                    <div className={styles.quantity}>{quantity}</div>
                    <button className={styles.counterButton} onClick={handleAdd}>
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

const MenuList = () => {
    const menuItems = []
    for (let i = 1; i <= 20; i++) {
        const menuItem = new MenuItem(`Item ${i}`, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU", `$${i * 5}`);
        menuItems.push(menuItem);
    }

    return (
        <div className={styles.menuList}>
            {menuItems.map((item, index) => (
                <Menu key={index} item={item} />
            ))}
        </div>
    );
};

export default MenuList;
