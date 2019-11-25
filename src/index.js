import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import createStore from './Store/Store'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';


import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
