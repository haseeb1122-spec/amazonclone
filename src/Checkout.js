import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from "./StateProvider";



function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className="Checkout">
      <div className='checkout_left'>
          <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
          <div className="checkout_details">
            <h2 className='checkout_title'>
              <h3></h3>
            Your Shopping Basket is empty
            </h2> 

          {basket.map(item =>(
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}

          </div>
      </div>

      <div className='checkout_right'>
          <Subtotal   />
      </div>
    </div>
  );
}



export default Checkout;
