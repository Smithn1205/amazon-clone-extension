export const initialState={
    orders: [],
    basket: [],
    user: null,
};

//Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
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

        case 'REMOVE_FROM_BASKET':
            // return{                            //Dp not use this method as it will delete allthe item from thebasket with that particular id, irrespective of how many items are actually present in the basket 
            //     ...state,
            //     basket: state.basket.filter(item=>item.id !== action.id)
            // }
            
            const index = state.basket.findIndex(             //find the index (int the basket) at which our product is 
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){                                     // if there exists index
                newBasket.splice(index, 1);                   // make a newBasket such that it doen't have the element with index
            }else{
                console.log(`Can't remove product (id: ${action.id}) as its not in basket!`)
            }

            return{
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
            case 'REMOVE_ALL_FROM_BASKET':
                // Clear the entire basket
                return {
                    ...state,
                    basket: [],
                };
                case 'ADD_BASKET_TO_ORDERS':
                    return {
                      ...state,
                      orders: [...state.orders, ...state.basket],
                      basket: [], // Clear the basket after adding to orders
                    };
                    case 'REMOVE_SINGLE_ITEM_FROM_ORDERS':
                        const itemIndexToRemove = state.orders.findIndex(
                          (orderItem) => orderItem.id === action.id
                        );
                  
                        if (itemIndexToRemove >= 0) {
                          // Create a new orders array without the item to remove
                          const newOrders = [
                            ...state.orders.slice(0, itemIndexToRemove),
                            ...state.orders.slice(itemIndexToRemove + 1),
                          ];
                  
                          return {
                            ...state,
                            orders: newOrders,
                          };
                        } else {
                          console.log(`Can't remove product (id: ${action.id}) as it's not in the orders!`);
                          return state;
                        }
                
        default: 
            return state;    
    }
}

export default reducer ;