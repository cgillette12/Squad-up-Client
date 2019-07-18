import React, { useContext } from 'react'
import GameContext from '../../contexts/GameContext'
import Profile from '../../components/Profile/Profile'
import GameSquadsList from '../../components/GameSquadsList/GameSquadsList'
import GamesList from '../../components/GamesList/GamesList'
import './DashboardMain.css'
import MobileUtils from '../Utils/MobileUtils';

export default function DashboardMain() {
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
    <>
      {renderDashboardMain()}
      <MobileUtils />
    </>
  )
}
