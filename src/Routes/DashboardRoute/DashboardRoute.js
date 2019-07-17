import React, { useContext} from 'react'
import GameSquadsList from '../../components/GameSquadsList/GameSquadsList'
import GamesList from '../../components/GamesList/GamesList'
import MySquads from '../../components/MySquads/MySquads'
import GameContext from '../../contexts/GameContext'
import MobileUtils from '../../components/Utils/MobileUtils'
import LiveChat from '../../components/LiveChat/LiveChat'
import Profile from '../../components/Profile/Profile'
import './DashboardRoute.css'

export default function DashboardRoute() {
  const gameContext = useContext(GameContext)

  const renderDashboardMain = () => {
    if (gameContext.gameIsSelected) {
      return (
        
        <div className="Dashboard__game-squads-list">
          <Profile />
          <GameSquadsList />
        </div>
      )
    } else {
      return (
        <div className="Dashboard__games-list">
          <Profile />
          <GamesList />
        </div>
      )
    }
  }

  return (
    <div className="Dashboard">
      <section className='Dashboard_squad-list'>
        <MySquads />
      </section>
      <div className='Dashboard_main'>
        {renderDashboardMain()}
      </div>
      <MobileUtils/>
      <div className="Dashboard__user-access">
        <div className='Dashboard__chat'>
          <h3>Chat</h3>
          <div className="Dashboard__chat-messages">
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  )
}
