"use client";

import React, { useState } from 'react';
import styles from './Grid.module.css';

const items = [
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    {
        name: 'Item 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$10',
    },
    {
        name: 'Item 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5DY5FGKpxXmmJJKgM20z7H4ljzt6DeH30TshToJzr5rhzdkOnhFG9Lpd1Xf6OB1ttTs&usqp=CAU',
        price: '$20',
    },
    // Add more items as needed
];

const Grid = () => {
    const [isOneColumn, setIsOneColumn] = useState(false);

    const toggleColumn = () => {
        setIsOneColumn(!isOneColumn);
    };

    return (
        <div>
            <div className={styles.switch}>
                <label>
                    <input type="checkbox" checked={isOneColumn} onChange={toggleColumn} />
                    One Column
                </label>
            </div>
            <div className={`${styles.grid} ${isOneColumn ? styles.oneColumn : ''}`}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <img src={item.image} alt={item.name} className={styles.image} />
                    <div className={styles.details}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.price}>{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Grid;