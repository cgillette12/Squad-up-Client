import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import config from '../../config';
import TokenService from '../../services/token-service';
import { Input } from '../../components/FormUtils/FormUtils'

export default function NewSquadForm() {
  const [squadName, setSquadName] = useState('');
  const [squadTag, setSquadTag] = useState('')
  const [squadTags, setSquadTags] = useState([])
  const [squaddescription, setSquadDescription] = useState('')

  const handleNewTag = () => {
    setSquadTags([...squadTags,
    <li className='squad-tag' key={squadTags.length + 1}>
      {squadTag}
    </li>
    ])
    setSquadTag('')
  }

  const handleSumbitSquad = e => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/squad`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ squadName, squadTags })
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
        {/* <div className='tags-input'>
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
        </div> */}
        <button type='submit' className='new-squad-submit'>
          Sumbmit Squad
        </button>
      </form>
      <form className='tags-form'>
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
            {squadTags}
          </ul>
        </div>
      </form>
    </div>
  )
}