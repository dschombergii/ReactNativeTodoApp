import AsyncStorage from '@react-native-community/async-storage';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';

let taskID = 0;

const STORAGE_KEY = '@save_tasks'

export const loadTasks = async () => {
    let tasks = []
    const load = () => {
        try {
            tasks = await AsyncStorage.getItem(STORAGE_KEY, tasks)
        } catch (e) {
            alert('Failed to load the data to the storage')
        }
    }
    return {
        type: LOAD_TASKS,
        tasks
    }
}

export const saveTasks = async () => {
    const save = () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, tasks)
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
    return {
        type: SAVE_TASKS,
        save
    }
}
export const addTask = (task) => {
    console.log(task)
    return {
        type: ADD_TASK,
        id: taskID++,
        task
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};