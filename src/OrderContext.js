// OrderContext.js
import React, { createContext, useContext, useReducer } from 'react';
import orderReducer, { initialState } from './orderReducer';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
