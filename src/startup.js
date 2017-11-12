import React from 'react';
import { render } from 'react-dom';
import { makeApp } from './react-components/make-App';
import 'normalize.css';
import 'core-js/es6/array';
import 'core-js/es6/object';
import 'core-js/es6/promise';
import 'core-js/es6/map';
import 'core-js/es6/set';
import '../styles/index.scss';

const createReactRootDiv = () => {
    const reactRootElement = document.createElement('DIV');
    reactRootElement.setAttribute('id', 'react-root');
    document.body.appendChild(reactRootElement);
    return reactRootElement;
};

const reactRootElement = createReactRootDiv();
const App = makeApp(React);

render(
    <App unit={'rem'} />,
    reactRootElement,
);
