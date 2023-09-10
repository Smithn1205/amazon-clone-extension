// OrderSuccess.js

import React from 'react';
import './OrderSuccess.css';
import Header from './Header'; // Import the Header component

function OrderSuccess() {
  return (
    <div className="order-success">
       <Header />
      <img
        className="order-success__image"
        src="https://media.istockphoto.com/id/882905872/vector/order-success-icon.jpg?s=612x612&w=0&k=20&c=f-16JYwat_0GG0bwlQPK8F9eOl-blPsPUQwCpl6tSic="
        alt="Order Success"
      />
      <h1 className="order-success__title">Order Successful!</h1>
      <p className="order-success__message">
        Thank you for shopping with Amazon Clone. Your order has been placed successfully.
      </p>
    </div>
  );
}

export default OrderSuccess;
