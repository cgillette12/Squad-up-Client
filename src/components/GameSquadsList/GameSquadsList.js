import React, { useState, useEffect, useContext } from 'react'
import config from '../../config'
import GameContext from '../../contexts/GameContext'
import SquadContext from '../../contexts/SquadContext'
import UserContext from '../../contexts/UserContext'
import ScrollArea from 'react-scrollbar'
import TokenService from '../../services/token-service'
import ProfileService from '../../services/profile-service'
import NewSquadForm from '../NewSquadForm/NewSquadForm'
import SquadListItem from '../SquadListItem/SquadListItem'
import { Input } from '../FormUtils/FormUtils'
import './GameSquadsList.css'

export default function GameSquadsList() {
  const gameContext = useContext(GameContext)
  const squadContext = useContext(SquadContext)
  const userContext = useContext(UserContext)

  const [error, setError] = useState(null)
  const [squadsList, setSquadsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [openSquadForm, setOpenSquadForm] = useState(false)

  useEffect(() => {
    gameContext.clearError()
    setSquadsList(gameContext.selectedGame.squadsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderSquads = () => {
    if (openSquadForm === true) {
      return (
        <div>
          <NewSquadForm
            cancel={() => setOpenSquadForm(false)}
            onFormSubmit={handleSubmitSquad}
          />
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

  const handleSearchFuzzy = input => {
    const filteredList = gameContext.selectedGame.squadsList.filter(squad =>
      squad.squad_name.includes(input)
    )
    setSquadsList(filteredList)
    setSearchTerm(input)
  }

  const gameId = gameContext.selectedGame.gameId

  const handleSubmitSquad = (e, squad_name, tags) => {
    e.preventDefault()

    fetch(`${config.API_ENDPOINT}/squads/add`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ game_id: gameId, squad_name, tags })
    })
      .then(res =>
        !res.ok ? res.json().then(err => Promise.reject(err)) : res.json()
      )
      .then(newSquad => {
        setOpenSquadForm(false)
        setSquadsList([...squadsList, newSquad])
        squadContext.addToSquadList(newSquad)
        ProfileService.getUserInfo(userContext.user.id).then(data => {
          userContext.setUser(data)
        })
      })
      .catch(res => {
        setError(res.error)
      })
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
        <button
          className="GameSquadsList__back-button"
          onClick={gameContext.clearSelectedGame}
        >
          Back
        </button>
        <div className="GameSquadsList__error red" role="alert">
          {error && <p>{error}</p>}
        </div>
        <button
          onClick={() => setOpenSquadForm(true)}
          className="GameSquadsList__link-make-squad"
        >
          Create a Squad
        </button>
      </div>
      <ScrollArea
        speed={0.8}
        className="Scrollable-squads"
        horizontal={false}
        vertical={true}
        smoothScrolling={true}
      >
      {renderSquads()}
      </ScrollArea>
    </section>
  )
}
