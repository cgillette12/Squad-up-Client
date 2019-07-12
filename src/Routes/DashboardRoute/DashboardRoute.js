import React, { useContext, useState } from 'react'
import GameSquadsList from '../../components/GameSquadsList/GameSquadsList';
import GamesList from '../../components/GamesList/GamesList'
import MySquads from '../../components/MySquads/MySquads'
import MobileDashboardControl from '../../components/MobileDashboardControl/MobileDashboardControl'
import GameContext from '../../contexts/GameContext'
import './DashboardRoute.css'

export default function DashboardRoute() {
  const gameContext = useContext(GameContext)

  const [viewMain, setViewMain] = useState('')
  const [viewSquads, setViewSquads] = useState('')
  const [viewChat, setViewChat] = useState('')


  const visulizeSquads = () => {
    setViewMain('hidden')
    setViewChat('hidden')
    setViewSquads('')
  }

  const visulizeMain = () => {
    setViewMain('')
    setViewChat('hidden')
    setViewSquads('hidden')
  }

  const visulizeChat = () => {
    setViewMain('hidden')
    setViewChat('')
    setViewSquads('hidden')
  }

  

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
      <div id='mobile-buttons-container'>
        <button onClick={visulizeSquads}>My Squads</button>
        <button onClick={visulizeMain}>Games</button>
        <button onClick={visulizeChat}>Chat</button>
      </div>
    <section className={`Dashboard_squad-list ${viewSquads}`}>
        <MySquads />
    </section>
      <div className={`Dashboard_main ${viewMain}`}>
        {renderDashboardMain()}
      </div>
      <div className="Dashboard__user-access">
        <div className={`Dashboard__chat ${viewChat}`}>
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
        </div>
      </div>
    </div>
  )
}
