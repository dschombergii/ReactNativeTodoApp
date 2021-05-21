import { createStore } from 'redux';
import tasksReducer from '../redux/reducers/reducers';

const store = createStore(tasksReducer);

export default store;