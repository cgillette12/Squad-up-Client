import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm/LoginForm';



it('renders LoginForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <LoginForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})