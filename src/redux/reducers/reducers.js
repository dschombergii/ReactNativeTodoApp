import { ADD_TASK, DELETE_TASK, LOAD_TASKS, SAVE_TASKS } from '../actions/actions';

let initialState = []

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log("adding task")
            return [
                ...state,
                action.task
            ];

        case DELETE_TASK:
            console.log(action.payload)
            const deletedTask = state.filter(task => task.id != action.payload);
            return deletedTask;

        case LOAD_TASKS:
            console.log('stored state', action.tasks)
            return [
                action.tasks
            ];

        case SAVE_TASKS:
            console.log('saved state', state)
            return state;

        default:
            return state;
    };
};

export default tasksReducer;