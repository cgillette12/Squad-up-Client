import React from 'react'
import GamesListItem from '../GamesListItem/GamesListItem'
import './GamesSublist.css'

export default function GamesSublist(props) {
  const { type = '', games = [] } = props

  const renderGames = () => {
    return games.map(game => 
      <GamesListItem key={game.id} game={game} />
    )
  }

  return (
    <div className="GamesSublist">
      <h3 className="GamesSublist__heading">{type}</h3>
      <div className="GamesSublist__games-list">
        {renderGames()}
      </div>
    </div>
  )
}
