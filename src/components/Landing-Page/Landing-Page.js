import React from 'react';
import { Link } from 'react-router-dom';
import './Landing-Page.css';
import DashboardScreenshot from '../../screenshots/DashBoardWithUpdatedChat.png'


export default function Home(){

  return(
    <div id='homePage'>
      <h1 className='landing-page-heading'>SquadUp</h1>
      <h2 className='tag-line'>One platform. Any game.</h2>
      <div id='features-wrapper'>
          <img className='image' src={DashboardScreenshot} alt='Dashboard Screenshot'></img>
        <div id='content-wrapper'> 
          <p className='image-caption'>Everyone loves games. But finding a community for your specific game can leave you with a bunch of accounts and apps to download. Not anymore. SquadUp is the new home for all of your gaming interests. From the latest FPS and MOBAs, to the oldest table-top RPGs and even IRL sports, we've got it all.<br/>
          <br/>
          The SquadUp dashboard is the last tool you'll need to connect with fellow gamers. Search for games, join or create squads and stay connected to your squadmates with a dedicated squad chatroom. </p>
          <div id='links-wrapper'>
            <Link to='/Register'><button className='link-button'>Sign up</button></Link>
            <Link to='/Login'><button className='link-button'>Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
