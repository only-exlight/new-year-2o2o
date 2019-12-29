import 'reflect-metadata';
import { render } from 'react-dom';
import * as React from 'react';
import App from './app/app';
import './styles.scss';

const root = document.getElementById('app');

render(<App />, root);
