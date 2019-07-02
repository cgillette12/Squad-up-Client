import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(){

  return(
    <div htmlClass='homePage'>
      <h1>Welcome to Squad Up!</h1>
      <p>Squad Up, allows its users to look through many games and form a community. Feel free to register and have a look around!</p>
      <Link to='/register'><button>Register</button></Link>
      <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

//users - still needs to add level image text not null
//squads - need to add chat
//games - looking good.
// tags - looking good. 