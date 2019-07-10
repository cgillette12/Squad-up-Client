import React, { useState } from 'react'
import config from '../../config';
import TokenService from '../../services/token-service';
import { Input } from '../../components/FormUtils/FormUtils'
import './newSquadForm.css'

export default function NewSquadForm() {
  const [squadName, setSquadName] = useState('');
  const [squadDescription, setSquadDescription] = useState('')
  const [squadTag, setSquadTag] = useState('')
  const [squadTags, setSquadTags] = useState([])

  const handleNewTag = () => {
    if (squadTag === '') {
      return;
    }
    setSquadTags([...squadTags, squadTag])
    setSquadTag('')
  }

  const removeTag = index => {
    const tags = [...squadTags]
    tags.splice(index, 1)
    setSquadTags(tags)
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
    <div id='new-squad-container'>
      <form
        id='new-squad-form'
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
          <button type='button' className='add-tag-button' onClick={handleNewTag}>Add Tag</button>
          <ul id='list-tags'>
            {squadTags.map((tag, index) =>
              <li className='squad-tag' key={index}>
                {tag} <button type='button' className='remove-tag-button' onClick={() => removeTag(index)}>Remove Tag</button>
              </li>
            )}
          </ul>
        </div>
        {/* <button type='button' className='new-squad-button' onClick='close the new squad pop up'>Close</button>  Will be used with the pop up of new Squad */}
        <button 
          type='submit' 
          className='new-squad-button'
        >
          New Squad
        </button>
      </form>
    </div>
  )
}