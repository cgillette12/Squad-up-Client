import React, { useContext, useState } from 'react'
import GameSquadsList from '../../components/GameSquadsList/GameSquadsList';
import GamesList from '../../components/GamesList/GamesList'
import GameContext from '../../contexts/GameContext'
import LiveChat from '../../components/LiveChat/LiveChat'
import './DashboardRoute.css'

export default function DashboardRoute() {
  const gameContext = useContext(GameContext)

  const renderDashboardMain = () => {
    if (gameContext.gameIsSelected) {
      return (
        <div className="Dashboard__game-squads-list">
          <GameSquadsList />
        </div>
      )
    } else {
      return (
        <div className="Dashboard__games-list">
          <GamesList />
        </div>
      )
    }
  }

  return (
    <div className="Dashboard">
      {renderDashboardMain()}
      <div className="Dashboard__user-access">
        <div className="Dashboard__user-squads">
          <h3>My Squads</h3>
          <ul>
            <li>Squad 1</li>
            <li>Squad 2</li>
            <li>Squad 3</li>
            <li>Squad 4</li>
          </ul>
        </div>
        <LiveChat />
        {/* <div className="Dashboard__chat">
          <h3>Chat</h3>
          <div className="Dashboard__chat-messages">
            <p>
              username <strong>time</strong> : some text messages
            </p>
            <p>
              username <strong>time</strong> : some text messages
            </p>
            <p>
              username <strong>time</strong> : some text messages
            </p>
            <p>
              username <strong>time</strong> : some text messages
            </p>
            <p>
              username <strong>time</strong> : some text messages
            </p>
            <p>
              username <strong>time</strong> : some text messages
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
