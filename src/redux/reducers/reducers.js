import { ADD_TASK, EDIT_TASK, DELETE_TASK, LOAD_TASKS, SAVE_TASKS } from '../actions/actions';

let initialState = [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return action.storedState

        case EDIT_TASK:
            return action.storedState

        case DELETE_TASK:
            return action.storedState;

        case LOAD_TASKS:
            return action.storedState;

        default:
            return state;
    };
};

export default tasksReducer;