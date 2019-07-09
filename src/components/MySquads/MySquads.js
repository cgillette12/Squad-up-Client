import React from 'react'
import './MySquads.css';

export default function MySquads() {
  const renderSquad = () => {
    let number = 11
    let arr = []
    for(let i = 0 ; i < number ; i++){
      arr.push(i)
    }
   return  arr.map((name, key) => <li className='squad' key={key}> Squad {name}</li>)
    
  }
  return (
    <div className="Dashboard__user-squads">
          <h3 className='My-squads'>My Squads</h3>
      <ul className='user-squads-list'>
        {renderSquad()}
      </ul>
    </div>
  )
}
