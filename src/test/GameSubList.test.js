import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import GamesSublist from '../components/GamesSublist/GamesSublist';


it('renders GameSubList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <GamesSublist/>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})