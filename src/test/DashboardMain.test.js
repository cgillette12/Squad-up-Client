import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import DashboardMain from '../components/DashboardMain/DashboardMain'

it('renders DashboardMain without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <DashboardMain />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})