import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tasksReducer from '../redux/reducers/reducers';

export const store = createStore(tasksReducer, applyMiddleware(thunk));