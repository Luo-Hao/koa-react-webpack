/**
 * Created by hao.luo on 2017/5/26.
 */
import React  from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './routes';
import todo from './reducers'

const store = createStore(todo);

ReactDOM.render((
        <Provider store={store}>
            <Routes />
        </Provider>
    ),
    document.getElementById('root')
);