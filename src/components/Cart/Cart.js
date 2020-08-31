import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total =cart.reduce( (total, product) => total + product.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        total = parseFloat(total.toFixed(2));
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0
    } else if (total > 12) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = Math.round(total / 10);
    const grandtotal = total + shipping + tax ;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>product price {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax:  {tax}</p>
            <p>Total Price: {grandtotal}</p>
            <br />
            <Link to='./review'>
                <button className="cart">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;