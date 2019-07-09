import React, { useState, useContext } from 'react'
import GamesApiService from '../../services/game-api.service'
import GameContext from '../../contexts/GameContext'
import './GamesListItem.css'

export default function GameListItem(props) {
  const { game = {} } = props
  const gameContext = useContext(GameContext)

  const handleGameClick = () => {
    GamesApiService.getSquadsForGame(game.id)
      .then(squadsList => {
        gameContext.setSelectedGame({ game: game.game_title, squadsList })
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div key={game.id} className="GamesListItem" onClick={handleGameClick}>
      <img className="GamesListItem__image" src={game.image} alt={game.game_title} aria-label={`Image of ${game.game_title}`}/>
      <span className="GamesListItem__title">{game.game_title}</span>
    </div>
  )
}
