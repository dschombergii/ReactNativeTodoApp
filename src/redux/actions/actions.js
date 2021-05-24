import AsyncStorage from '@react-native-community/async-storage';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';

// key for AsyncStorage
const STORAGE_KEY = '@saved_tasks'

// date format for timestamps
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

// state to add new tasks to
let storedState = []

// load stored state, if it is not empty push the loaded state to reducer to populate initial state
export const loadTasks = () => {
    return async dispatch => {
        try {
            let tasks = await AsyncStorage.getItem(STORAGE_KEY)
            tasks != null && (
                storedState = JSON.parse(tasks),
                dispatch({
                    type: LOAD_TASKS,
                    storedState
                })
            )
        } catch (error) {
            alert('Failed to load the data to the storage')
        }
    }
};

// recieves new task title and details from add item screen, adds them to new task object
// and then pushes new task object to storedState array.
// Then saves storedState array to AsyncStorage, and dispatches loadState again to refresh
// storedState and dispatch to reducer to populate current app state.
export const addTask = ({ title, details }) => {
    return async dispatch => {
        let newTask = {
            id: Math.floor(Math.random() * 1001),
            title,
            details,
            createdAt: new Date().toLocaleString('en-US', dateOptions),
            complete: false,
            completedDate: null,
            completedTime: null
        }
        storedState.push(newTask)
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storedState));
            dispatch(loadTasks(), {
                type: ADD_TASK,
                storedState
            })
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
};

// pulls task from storedState and edits whether the task has been completed or not,
// then sets timestamps from completed date and time, nd dispatches edited state to reducer.  
export const editTask = (id) => {
    return async dispatch => {
        let taskIndex = storedState.findIndex(task => task.id === id);
        storedState[taskIndex].complete = !storedState[taskIndex].complete
        storedState[taskIndex].completedDate = new Date().toLocaleString('en-US', dateOptions)
        storedState[taskIndex].completedTime = new Date().toLocaleTimeString('en-US')
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storedState));
            dispatch(loadTasks(), {
                type: EDIT_TASK,
                storedState
            })
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
};

// deletes task with given ID from storedState array, then saves filtered array to AsyncStorage
// and dispatches loadTasks again to update storedState, then dispatches it to reducer to populate app state.
export const deleteTask = (id) => {
    return async dispatch => {
        let deletedTask = storedState.filter(task => task.id != id);
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(deletedTask));
            dispatch(loadTasks(), {
                type: DELETE_TASK,
                storedState
            })
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
};