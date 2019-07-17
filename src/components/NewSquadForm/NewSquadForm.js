import React, { useState } from 'react'
import { Input } from '../../components/FormUtils/FormUtils'
import './newSquadForm.css'


export default function NewSquadForm(props) {
  const [squadName, setSquadName] = useState('');
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


  return (
    <div id='new-squad-container'>
      <form
        id='new-squad-form'
         onSubmit={(e) => props.onFormSubmit(e, squadName, squadTags)}
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
          <button
            type='submit'
            className='new-squad-button'
          >
            New Squad
          </button>
        <button
          type='button'
          className='new-sqaud-button'
          onClick={props.cancel}
        >
          Cancel
        </button>
        <button type='button' className='new-squad-button' onClick={props.cancel}>Cancel</button>
      </form>
    </div>
  )
}