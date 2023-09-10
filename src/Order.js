import React from 'react';
import "./Checkout.css";
import OrderedProduct from './OrderedProduct';
import { useStateValue } from './StateProvider';
import Header from './Header'; // Import the Header component

function Order() {
  const[{orders, user}, dispatch] = useStateValue();

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
              <h2 className="checkout_title">Your Orders</h2>
            </div>
            <h3>Hello {user?.email}</h3>
            {orders.map(item => (
              <OrderedProduct
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
      </div>
    </div>
  )
}

export default Order;
