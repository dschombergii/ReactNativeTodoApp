import { ADD_TASK, DELETE_TASK, LOAD_TASKS, SAVE_TASKS } from '../actions/actions';

const initialState = [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log("adding task")
            return [
                ...state,
                {
                    id: action.id,
                    task: action.task
                }
            ];
        case DELETE_TASK:
            console.log(action.payload)
            const deletedTask = state.filter(task => task.id != action.payload);
            return deletedTask;
        case LOAD_TASKS:
            return [
                action.tasks
            ];
        case SAVE_TASKS:
            return [
                ...state,
                action.tasks
            ];
        default:
            return state;
    };
};

export default tasksReducer;