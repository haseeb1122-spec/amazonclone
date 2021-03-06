
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";
// import Increment from './Increment';
import React, { Component } from 'react';




function CheckoutProduct({id, image, title, price, rating}) {
 
    const[{ basket }, dispatch] = useStateValue();

const removeFromBasket = () => {
     dispatch({
         type:'REMOVE_FROM_BASKET',
         id: id,
     })
}


  return (
    <div className="CheckoutProduct">
      <img className='checkoutProduct_image' src={image}/>
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>
        <div className='checkoutProduct_rating'>
             {Array(rating)
              .fill()
              .map((_, i) => (
                  <p className='rating_icon'><StarIcon /></p>
              ))}
        </div>
         {/* <Increment /> */}
        <button className="checkoutProduct_remove" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
