import React, { useState } from 'react'
import GamesListItem from '../GamesListItem/GamesListItem'
import './GamesSublist.css'

export default function GamesSublist(props) {
  const { type = '', games = [] } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const renderGames = () => {
    return games.map(game => 
      <GamesListItem key={game.id} game={game} />
    )
  }

  return (
    <div className="GamesSublist">
      <h3 className="GamesSublist__heading">{type}</h3>
      <button className="GamesSublist__expand-btn" onClick={toggleExpand}>
        {isExpanded ? 'Collapse -' : 'Expand +'}
      </button>
      <div className={`GamesSublist__games-list${isExpanded ? '': ' not-expanded'}`}>
        {renderGames()}
      </div>
    </div>
  )
}
