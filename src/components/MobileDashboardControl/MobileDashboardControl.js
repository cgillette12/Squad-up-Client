import React, {useState} from 'react'
import './MobileDashboardControl.css'

export default function MobileDashboardControl(props) {
  
  
  const visulizeSquads = () => {
    
  }

  const visulizeGames = () => {

  }

  const visulizeChat = () => {

  }

  return (
    <div id='mobile-buttons-container'>
      <button onClick={visulizeSquads}>My Squads</button>
      <button onClick={visulizeGames}>Games</button>
      <button onClick={visulizeChat}>Chat</button>
    </div>
  )
}