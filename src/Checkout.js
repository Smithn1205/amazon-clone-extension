import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import Header from './Header'; // Import the Header component

function Checkout() {
  const[{basket, user}, dispatch] = useStateValue();
  
  const removeAllFromBasket = () => {
    dispatch({
      type: 'REMOVE_ALL_FROM_BASKET',
    });
  };
  
  return (
    <div>
      {/* Include the Header component here */}
      <Header />

      <div className='checkout'>
        <div className='checkout_left'>
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <div className="checkout_title_container">
              <h2 className="checkout_title">Your shopping basket</h2>
              {basket.length > 0 && ( // Show the button only if there are items in the basket
                <button className="removeAllButton" onClick={removeAllFromBasket}>
                  Remove All
                </button>
              )}
            </div>
            <h3>Hello {user?.email}</h3>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        
        <div className='checkout_right'>
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout;
