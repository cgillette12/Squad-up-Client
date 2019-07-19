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
          <div className='tags-input-wrapper'>
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
          </div>
        </div>
        <section className='taglist'>
          <ul id='list-tags'>
            {squadTags.map((tag, index) =>
              <section className='tagList-wrapper' key={index}>
                <li className='squad-tag'>
                  <p className='remove-tag-button'>{tag}
                    <span
                      onClick={() => removeTag(index)}> X </span>
                  </p>
                </li>
              </section>
            )}
          </ul>
        </section>
        <section className='button-wrapper'>
          <button
            type='submit'
            className='new-squad-button'
          >
            New Squad
          </button>
          <button
            type='button'
            className='new-squad-button'
            onClick={props.cancel}>Cancel</button>
        </section>
      </form>
    </div>
  )
}