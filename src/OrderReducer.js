// orderReducer.js
export const initialState = {
    orders: [],
  };
  
  const orderReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_ORDER':
        return {
          ...state,
          orders: [...state.orders, action.item],
        };
      case 'REMOVE_FROM_ORDER':
        return {
          ...state,
          orders: state.orders.filter(item => item.id !== action.id),
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  