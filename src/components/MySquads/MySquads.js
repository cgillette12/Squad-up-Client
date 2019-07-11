import React ,{useState, useContext}from 'react'
import SquadService from '../../services/Squad-api-service'
import SquadContext from '../../contexts/SquadContext'
import './MySquads.css';

export default function MySquads() {
 
  // const { squadList, setSquadList } = useState([]);
  // const [error, setError] = useState(null)
  // const context = useContext(SquadContext);
  // const renderSquad = () => {
  //   SquadService.getAllSquad()
  //     .then(res => {
  //       setSquadList('')
  //     })
  //     .catch(res => {
  //       setError(res.error)
  //     })

  // }



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
