import React, { useState, useEffect, useContext } from 'react'
import GameContext from '../../contexts/GameContext';
import SquadListItem from '../SquadListItem/SquadListItem'

export default function GameSquadsList() {
  const gameContext = useContext(GameContext)

  const [squadsList, setSquadsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    gameContext.clearError()
    setSquadsList(gameContext.selectedGame.squadsList)
  }, [])

  const renderSquads = () => {
    if(squadsList.length === 0) {
      return <span>No squads, yet</span>
    }
    
    return squadsList.map((squad, index) => {
      return <SquadListItem key={index} squad={squad} />
    })
  }

  return (
    <section className="GameSquadsList">
      <button onClick={gameContext.clearSelectedGame}>Back</button>
      {renderSquads()}
    </section>
  )
}
