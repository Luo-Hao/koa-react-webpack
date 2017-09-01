/**
 * Created by DEV on 2017/8/31.
 */

import todos from './todo';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    todos
});

export default todoApp


