import React, { useState } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import Header from './Header'; // Import the Header component

function Product({ id, title, image, price, rating }) {
  const [{basket, user}, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(0); // Track the quantity

  const increaseQuantityAndAddToBasket = () => {
    // Dispatch the item into the data layer with the current quantity
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity + 1, // Increase the quantity by 1
      },
    });

    // Update the quantity state
    setQuantity(quantity + 1);
  };
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: 1, // Start with a quantity of 1
      },
    });
    
    // Update the quantity state
    setQuantity(1);
  };

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  // Function to decrease the quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,

    })
    }
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating).fill().map((i, idx) => (
            <p key={idx}>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt={title} />

      {quantity === 0 ? ( // Display the button or quantity based on the state
        <button className='add' onClick={addToBasket}>Add to Basket</button>
      ) : (
        <div className="product_quantity">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantityAndAddToBasket}>+</button>
        </div>
      )}
    </div>
  );
}

export default Product;
