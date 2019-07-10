import React from 'react';
import { Link } from 'react-router-dom';
import './Landing-Page.css';


export default function Home(){

  return(
    <div id='homePage'>
      <h1>Welcome to Squad Up!</h1>
      <p>Squad Up, allows its users to look through many games and form a community. Feel free to register and have a look around!</p>
      <div id='links-wrapper'> 
        <Link to='/Register'><button className='link-button'>Register</button></Link>
        <Link to='/Login'><button className='link-button'>Login</button></Link>
      </div>
    </div>
  )
}
