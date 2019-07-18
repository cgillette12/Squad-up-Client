import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import SquadListItem from '../components/SquadListItem/SquadListItem'

it('renders SquadListItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <SquadListItem squad={{tags: []}} />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})


// if need context use provider from context. 
// if needs prop give it an empty prop. 
