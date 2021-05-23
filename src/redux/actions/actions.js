import AsyncStorage from '@react-native-community/async-storage';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';

const STORAGE_KEY = '@saved_tasks'

export const loadTasks = () => {
    return async dispatch => {
        try {
            let tasks = await AsyncStorage.getItem(STORAGE_KEY)
            console.log("loaded tasks", tasks)
            dispatch({
                type: LOAD_TASKS,
                tasks: tasks != null ? JSON.parse(tasks) : null
            })
        } catch (e) {
            alert('Failed to load the data to the storage', e)
        }
    }
};

// export const saveTasks = (tasks) => {
//     console.log('saving', tasks)
//     return async dispatch => {
//         try {
//             await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
//             dispatch({
//                 type: SAVE_TASKS,
//             })
//         } catch (e) {
//             alert('Failed to save the data to the storage', e)
//         }
//     }
// };

export const addTask = ({ title, details }) => {
    return async dispatch => {
        let newTask = {
            id: Math.floor(Math.random() * 1001),
            title,
            details,
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTask))
            dispatch({
                type: ADD_TASK,
                task: newTask
            })
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
};

// export const addTask = (item) => {
//     let newTask = {
//         id: Math.floor(Math.random() * 1001),
//         title: item.title,
//         details: item.details
//     }
//     console.log('new task', newTask)
//     return {
//         type: ADD_TASK,
//         newTask
//     };
// };

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};