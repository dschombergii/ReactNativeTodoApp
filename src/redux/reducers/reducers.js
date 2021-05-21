import { ADD_TASK, DELETE_TASK } from '../actions/actions';

// import state from '../state'

const initialState = [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    task: action.task
                }
            ];

        case DELETE_TASK:
            const deletedTask = state.filter(task => task.id != action.payload);
            return deletedTask;
        default:
            return state;
    };
};

export default tasksReducer;