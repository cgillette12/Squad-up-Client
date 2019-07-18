import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm';


it('renders RegisterForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
        <RegisterForm />
        </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})