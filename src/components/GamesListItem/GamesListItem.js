import React from 'react'
import './GamesListItem.css'

export default function GameListItem(props) {
  const { game = {} } = props

  return (
    <div key={game.id} className="GamesListItem">
      <img className="GamesListItem__image" src={game.image} alt={game.game_title} aria-label={`Image of ${game.game_title}`}/>
      <span className="GamesListItem__title">{game.game_title}</span>
    </div>
  )
}
