import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { Input } from '../../components/FormUtils/FormUtils'

export default function NewSquadForm() {
  const [squadName, setSquadName] = useState('');
  const [squadTag, setSquadTag] = useState('')
  const [squadTags, setSquadTags] = useState([])
  
  const handleNewTag = () => {
    setSquadTags([...squadTags, 
      <li>
        {squadTag}
      </li>
    ])
  }


  return (
    <div>
      <form
        className='new-squad-form'

      >
        <Input
          id='squad-name-input'
          type='text'
          name='squad-name'
          placeholder='squad name'
          value={squadName}
          onChange={e => setSquadName(e.target.value)}
          aria-label='squad-name'
          autoFocus
          required
        />
        <div>
          <Input
            id='squad-tags-input'
            type='text'
            name='squad-tag-input'
            placeholder='new tag'
            value={squadTag}
            onChange={e => setSquadTag(e.target.value)}
            aria-label='squad tag input'
          />
          <button onClick={handleNewTag}>New Tag</button>
          <ul>
            {squadTags}
          </ul>
        </div>
        <button type='submit' className='new-squad-submit'>
          New Squad
        </button>
      </form>
    </div>
  )
}