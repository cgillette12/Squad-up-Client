import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import GameListItem from '../components/GamesListItem/GamesListItem'

it('renders GameListItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <GameListItem />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})