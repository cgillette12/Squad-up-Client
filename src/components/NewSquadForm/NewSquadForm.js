import React, { useState } from 'react'
import config from '../../config';
import TokenService from '../../services/token-service';
import { Input } from '../../components/FormUtils/FormUtils'

export default function NewSquadForm() {
  const [squadName, setSquadName] = useState('');
  const [squadDescription, setSquadDescription] = useState('')
  const [squadTag, setSquadTag] = useState('')
  const [squadTags, setSquadTags] = useState([])

  const removeTag = index => {
    setSquadTags([...squadTags.splice(index, 1)])
  }

  console.log(squadTags)
  const handleNewTag = () => {
    setSquadTags([...squadTags, squadTag])
    setSquadTag('')

    console.log(
      <li className='squad-tag' key={squadTags.length}>
        {squadTags[squadTags.length - 1]}
        <button onClick={e => removeTag(squadTags.length)}>Remove</button>
      </li>
    )
    
  }

  const handleSumbitSquad = e => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/squad`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ squadName, squadDescription, squadTags })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
  }

  return (
    <div>
      <form
        className='new-squad-form'
        onSubmit={handleSumbitSquad}
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
        <textarea
          id='squad-description'
          name='squad-description'
          placeholder='Description'
          value={squadDescription}
          onChange={e => setSquadDescription(e.target.value)}
          aria-label='Description'
        ></textarea>
        <div className='tags-input'>
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
         
          </ul>
        </div>
        <button type='submit' className='new-squad-submit'>
          Sumbmit Squad
        </button>
      </form>
    </div>
  )
}