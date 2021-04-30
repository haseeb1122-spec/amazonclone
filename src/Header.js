import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
// import Login from "./Login";

function Header() {
    const [{ basket, user }, dispatch ] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
        <img 
        className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG6.png'/>
      </Link>
      
    <div className="header_search">
        <input type='text' className='header_searchInput'/>
        <SearchIcon className='header_SearchIcon' />
    </div>

    <div className="header_nav">

    <Link to={!user && './Login'}>
        <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello, {!user ? 'Guest' : user.email}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>


        <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>

        <Link to='/Checkout'>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>
                {basket?.length}
                </span>
        </div>
        </Link>
    </div>

    </div>
  );
}

export default Header;
