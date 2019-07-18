import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import MySquads from '../components/MySquads/MySquads';



it('renders MySquad without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <MySquads/>
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})

