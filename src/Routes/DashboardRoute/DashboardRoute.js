import React, { useContext, useState, useEffect } from 'react'
import GameSquadsList from '../../components/GameSquadsList/GameSquadsList';
import GamesList from '../../components/GamesList/GamesList'
import MySquads from '../../components/MySquads/MySquads'
import GameContext from '../../contexts/GameContext'
import './DashboardRoute.css'

export default function DashboardRoute() {
  const gameContext = useContext(GameContext)

  const [viewMain, setViewMain] = useState(
    {
      hClass: '',
      visible: false
    })
  const [viewSquads, setViewSquads] = useState(
    {
      hClass: '',
      visible: false
    })
  const [viewChat, setViewChat] = useState(
    {
      hClass: '',
      visible: false
    })

  const windowWidth = () => {
    if (window.innerWidth <= 700 && viewSquads.visible === false) {
      setViewSquads({hClass:'hidden', visible: false })
    }
     if (window.innerWidth <= 700 && viewChat.visible === false) {
      setViewChat({hClass:'hidden', visible: false })
    } 
  } 
  window.onresize = windowWidth;

  useEffect(() => {
    if (window.innerWidth <= 700 && viewSquads.visible === false) {
      setViewSquads({ hClass: 'hidden', visible: false })
    }
    if (window.innerWidth <= 700 && viewChat.visible === false) {
      setViewChat({ hClass: 'hidden', visible: false })
    }
  }, [])


  const visulizeSquads = () => {
    setViewMain({ hClass: 'hidden', visible: false })
    setViewChat({ hClass: 'hidden', visible: false })
    setViewSquads({ hClass: '', visible: true })
  }

  const visulizeMain = () => {
    setViewMain({ hClass: '', visible: true })
    setViewChat({ hClass: 'hidden', visible: false })
    setViewSquads({ hClass: 'hidden', visible: false })
  }

  const visulizeChat = () => {
    setViewMain({ hClass: 'hidden', visible: false })
    setViewChat({ hClass: '', visible: true })
    setViewSquads({ hClass: 'hidden', visible: false })
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
      <section className={`Dashboard_squad-list ${viewSquads.hClass}`}>
        <MySquads />
      </section>
      <div className={`Dashboard_main ${viewMain.hClass}`}>
        {renderDashboardMain()}
      </div>
      <div className="Dashboard__user-access">
        <div className={`Dashboard__chat ${viewChat.hClass}`}>
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
