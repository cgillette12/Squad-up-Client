import React, {useState, useEffect} from 'react';

import './SquadDashboard.css'

export default function SquadDashboard(){
  const [tags, setTags] = useState([])
  const [members, setMembers] = useState([])

  const fakeusers = [
    {
      user: 'jake', 
      online: true,
    }, 
    { 
      user:'Zal', 
      online: false,
    }, 
    { 
      user:'Adam',
      online:true,
    },
    {
      user: 'Cody',
      online: false,
    }
  ]

  useEffect(() => {
  //use a fetch to grab the tags and members

  //seting tags
    setTags(['casual,', 'midwest'])
    setMembers(fakeusers)
  },[])
  // Recognize if Leader

  // As a Leader:
  
  // Accept members?
  // Kick members?
  // Update Squad info
  // set events?

  // As any User
  // list of squad members
  // chat for squad
  // join/ see events?

  
  
  return (
    <div>
      <h2>Name of Squad</h2>
      <div>
        <h3>Squad Tags</h3>
        <ul>
          {tags.map((tag, index) => 
            <li className='squad-tags' key={index}>
              {tag}
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3>Online members</h3>
        <ul>
          {members.map((member, index) =>{
            if(member.online === true){
              return(
                <li className='squad-members' key={index}>
                  {member.user}
                </li>
              )            
            }
          })}
        </ul>
      </div>
      <div>
        <h3>Offline members</h3>
        <ul>
        {members.map((member, index) =>{
            if(member.online !== true){
              return(
                <li className='squad-members' key={index}>
                  {member.user}
                </li>
              )            
            }
          })}
        </ul>
      </div>
    </div>
  )
}