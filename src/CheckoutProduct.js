import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}></img>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((i, idx) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button className='remove' onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
