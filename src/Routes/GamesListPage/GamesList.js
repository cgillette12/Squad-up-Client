import React, { useState, useEffect, useContext } from 'react'
import GameContext from '../../contexts/GameContext'
import GameApiService from '../../services/game-api.service'
import GamesSublist from '../../components/GamesSublist/GamesSublist'

// import store from './dummy-store'

export default function GamesList() {
  const gameContext = useContext(GameContext)
  
  const [gamesList, setGamesList] = useState([])
  
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
  }, [])

  const renderGames = () => {
    return gameTypes.map((type, index) => {
      return (
        <GamesSublist
          key={index}
          type={type}
          games={gamesList.filter(game => game.game_type === type)}
        />
      )
    })
  }

  return (
    <section className="GamesList">
      <form className="GamesList__search-bar">
        <input type="text" placeholder="Search for Games..." name="search-games" />
        <button type="submit">Submit</button>
      </form>
      {renderGames()}
    </section>
  )
}
