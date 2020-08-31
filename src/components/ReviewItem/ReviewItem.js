import React from 'react';


const ReviewItem = (props) => {

    const { name, quantity, key, price} = props.product;
    return (
        <>
            <h4>{name}</h4>
            <p>Quantity: {quantity[key]}</p>
            <p><small>${price}</small></p>
            <button onClick={() => props.handleRemoveProduct(key)} className="cart">Remove</button>
        </>
    );
};

export default ReviewItem;