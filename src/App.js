import './App.css';
import Mainhome from './Mainhome';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register'
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import PaymentModeSelection from './PaymentModeSelection';
import OrderSuccess from './OrderSuccess';
import Order from './Order';

function App() {
  const[{}, dispatch] = useStateValue();


  useEffect(()=>{
    //Will only run once when the app component loads 
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        // the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

        

        

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
      
        <Routes>
        <Route path='/register' element={<><Register/></>}></Route>
        <Route path='/order' element={<><Order/></>}></Route>
        <Route path='/ordersuccess' element={<><OrderSuccess/></>}></Route>
        <Route path='/paymentmode' element={<><PaymentModeSelection/></>}></Route>
          <Route path='/login' element={<><Login/></>}></Route>
          <Route path='/checkout' element={<><Checkout/></>}></Route>
          <Route path='/' element={<><Home/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
