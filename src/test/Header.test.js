import React from 'react';
import { expect } from 'chai';
import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header/Header';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

