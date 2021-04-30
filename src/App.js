import React, { useEffect } from "react";
import './App.css';
import Header from './Header.js';
import  './Header.css';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe
("pk_test_51IfipjJH22KBbY4WbRSOc8XzelRESyqftamraATk19E8lYco3CYlb7FXXPQWDcmbflgDdjS2JOkOhpaAMml1pfd200uBRaDkBa");


function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS AUTH >>>>>', authUser);

      if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
          // user is just loged in
      } else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
        // user is just loged out
      }
    }) 
  }, [])

  return (
    <Router>
    <div className="App">
    
    <Switch>
    <Route path="/login">
      <Login />
      </Route>

    <Route path="/checkout">
      <Header/>
      <Checkout />
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment/>
      </Elements>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>      
      </Route>

    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
