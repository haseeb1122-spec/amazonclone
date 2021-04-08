import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
const history = useHistory();    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(auth =>{
        history.push('/')
    })
    .catch(error => alert(error.message)) 
} 

const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if (auth) {
            history.push('/')
        }
    } )
    .catch(error => alert(error.message)) 

    // do some fancy firebase Register..  
}


  return (
    <div className="login">
       <Link to='/'>
        <img 
        className='header_logo for_login' src='http://pngimg.com/uploads/amazon/amazon_PNG6.png'/>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type="email" className='fields' value={email} onChange={
                e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" className='fields' value={password} onChange={
                e => setPassword(e.target.value)}/>

             <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>

        </form>

        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button onClick={register} className="login_registerButton">Create your Amazon Account</button>

      </div>
    </div>
  );
}

export default Login;
