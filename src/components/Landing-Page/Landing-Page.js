import React from 'react';
import { Link } from 'react-router-dom';
import './Landing-Page.css';


export default function Home(){

  return(
    <div className='homePage'>
      <h1>Welcome to Squad Up!</h1>
      <p>Squad Up, allows its users to look through many games and form a community. Feel free to register and have a look around!</p>
      <Link to='/Register'><button>Register</button></Link>
      <Link to='/Login'><button>Login</button></Link>
    </div>
  )
}
