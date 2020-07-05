import React from 'react';
import ReactDom from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './src/App';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
if (path) {
    history.replace(path);
}

ReactDom.render(<App />, document.getElementById('root'));