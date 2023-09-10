import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const[{ basket, user}, dispatch] = useStateValue();


    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate("/")
    }
    const navigateToorderpage = ()=>{
        navigate("/order")
    }
    const navigateToCheckout = ()=>{
        navigate("/checkout")
    }

    // const navigateToSignIn = ()=> {
    //     navigate("/login")
    // }

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
            alert('Logged out successfully')
        }
        if(!user){
            navigate('/login')
        }
    }

    return (
        <div className='header'>
            <img
              className="header_logo1"
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
              onClick={navigateToHome}
            />

            <div className="header__nav">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                <div className="header__option" onClick={navigateToorderpage}>
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div onClick={navigateToCheckout} className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;