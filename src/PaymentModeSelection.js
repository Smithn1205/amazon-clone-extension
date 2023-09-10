// PaymentModeSelection.js

import { Padding } from '@mui/icons-material';
import { colors } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PaymentModeSelection = () => {
    const [selectedMode, setSelectedMode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const navigateToordersuccess = () => {
      if (selectedMode) {
        navigate("/ordersuccess");
      } else {
        setError('Please select a payment mode.');
      }
    };

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  const handleProceed = () => {
    if (selectedMode) {
      // Redirect or navigate to the payment form based on the selected mode
      // You can use React Router or any other navigation method here
    } else {
      // Display an error message or prompt the user to select a mode
    }
  };

  return (
    <div className="payment-mode-selection">
      <style>
        {`
          /* CSS for PaymentModeSelection */
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            min-height: 100vh; /* Set minimum height to 100% of the viewport height */
          }

          .payment-mode-selection {
            max-width: 400px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
          }

          .payment-mode-option {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }

          input[type="radio"] {
            margin-right: 10px;
            transform: scale(1.5); /* Increase the radio button size */
          }

          label {
            font-size: 18px;
            color: #333;
            cursor: pointer;
          }

          button {
            background: #f0c14b;
            border-radius: 2px;
            width: 100%;
            height: 30px;
            border: 1px solid;
            margin-top: 10px;
            border-color: #a88734 #9c7e31 #846a29;
            color: #111;
          }

          button:hover {
            background-color: #d4ac0d;
          }
          .agreement-text {
            font-size: 14px;
            color: #888;
            margin-top: 10px;
            text-align: center;
            .error-message {
            color: red;
            margin-top: 10px;
          }
          .error-message {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>

      <h2>Payment Mode</h2>
      <div className="payment-mode-selection">
      <h2>Select Payment Mode</h2>

      <div className="payment-mode-option">
        <input
          type="radio"
          id="credit-card"
          value="credit-card"
          checked={selectedMode === 'credit-card'}
          onChange={handleModeChange}
        />
        <label htmlFor="credit-card">Credit\Debit Card</label>
      </div>

      <div className="payment-mode-option">
        <input
          type="radio"
          id="paypal"
          value="paypal"
          checked={selectedMode === 'paypal'}
          onChange={handleModeChange}
        />
        <label htmlFor="paypal">PayPal</label>
      </div>

      <div className="payment-mode-option">
        <input
          type="radio"
          id="other"
          value="other"
          checked={selectedMode === 'other'}
          onChange={handleModeChange}
        />
        <label htmlFor="other">Cash on Delivery</label>
      </div>

      <button onClick={navigateToordersuccess}>Proceed</button>
    </div>

    {error && <p style={{ color: 'red', paddingLeft: '90px' }}>{error}</p>}

    
    <p className="agreement-text">
          By proceeding, you agree to our Terms and Conditions, Privacy Policy, and Cookie Policy.
        </p>
    </div>
  );
};

export default PaymentModeSelection;
