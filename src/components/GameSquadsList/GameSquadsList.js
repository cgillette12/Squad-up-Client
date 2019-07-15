import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import GameContext from '../../contexts/GameContext'
import SquadListItem from '../SquadListItem/SquadListItem'
import { Input } from '../FormUtils/FormUtils'
import NewSquadForm from '../NewSquadForm/NewSquadForm'
import './GameSquadsList.css'

export default function GameSquadsList() {
  const gameContext = useContext(GameContext)

  const [squadsList, setSquadsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [openSquadForm, setOpenSquadForm] = useState(false)

  useEffect(() => {
    gameContext.clearError()
    setSquadsList(gameContext.selectedGame.squadsList)
  }, [])

  const renderSquads = () => {
    if(openSquadForm === true){
      return (
        <div>
          <NewSquadForm cancel={() => setOpenSquadForm(false)} />
          {/* <button onClick={() => setOpenSquadForm(false)}>Cancel</button> */}
        </div>
      )
    }
    if (squadsList.length === 0) {
      return <h2 className="GameSquadsList__empty-notice">No squads, yet</h2>
    }

    return squadsList.map((squad, index) => {
      return <SquadListItem key={index} squad={squad} />
    })
  }

  const handleSearchFuzzy = (input) => {
    const filteredList = gameContext.selectedGame.squadsList.filter(squad => squad.squad_name.includes(input))
    setSquadsList(filteredList)
    setSearchTerm(input)
  }

  return (
    <section className="GameSquadsList">
      <form className="GameSquadsList__search-bar">
        <Input
          type="text"
          placeholder="Search for Squads..."
          className="GameSquadsList__search-input"
          onChange={e => handleSearchFuzzy(e.target.value)}
          value={searchTerm}
          aria-label="Search for Games"
          autoFocus
        />
      </form>
      <div className="GameSquadsList__controls">
        <button className="GameSquadsList__back-button" onClick={gameContext.clearSelectedGame}>Back</button>
        {/* <Link className="GameSquadsList__link-make-squad" to="/newsquad">Create a Squad</Link> */}
        <button onClick={() => setOpenSquadForm(true)}>Create a Squad</button>
      </div>
      {renderSquads()}
    </section>
  )
}
