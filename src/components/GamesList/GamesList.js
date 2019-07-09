import React, { useState, useEffect, useContext } from 'react'
import GameContext from '../../contexts/GameContext'
import GameApiService from '../../services/game-api.service'
import GamesSublist from '../GamesSublist/GamesSublist'
import { Input } from '../FormUtils/FormUtils'
import './GamesList.css'

// import store from './dummy-store'

export default function GamesList() {
  const gameContext = useContext(GameContext)
  
  const [gamesList, setGamesList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const gameTypes = [
    'Video Games',
    'Board Games',
    'Card Games',
    'Table-Top Games',
    'Recreation',
    'Others'
  ]
  
  useEffect(() => {
    gameContext.clearError()

    GameApiService.getGames()
      .then(games => {
        gameContext.setGamesList(games)
        setGamesList(games)
      })
      .catch(gameContext.setError)

    return function cleanup() {
      gameContext.clearGamesList()
    }
  }, [])

  const renderGames = () => {
    return gameTypes.map((type, index) => {
      const gamesByType = gamesList.filter(game => game.game_type === type)

      if(gamesByType.length !== 0) {
        return (
          <GamesSublist
            key={index}
            type={type}
            games={gamesByType}
          />
        )
      }
    })
  }

  const handleSearchFuzzy = (input) => {
    const filteredList = gameContext.gamesList.filter(game => game.game_title.includes(input))
    setGamesList(filteredList)
    setSearchTerm(input)
  }

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault()

  //   setSearchTerm(e.target.value)
  // }

  return (
    <section className="GamesList">
      <form 
        className="GamesList__search-bar"
        // onSubmit={e => handleSearchSubmit(e)}  
      >
        <Input 
          type="text"
          placeholder="Search for Games..."
          className="GamesList__search-input"
          onChange={e => handleSearchFuzzy(e.target.value)}
          value={searchTerm}
          aria-label="Search for Games"
          autoFocus
        />
        {/* <button type="submit">Search</button> */}
      </form>
      {renderGames()}
    </section>
  )
}
