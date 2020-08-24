import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    //console.log(props.product);
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-container">
                <h4 className="product-price">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small className="price-style">${price}</small></p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddProduct(props.product)} className='cart'><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
