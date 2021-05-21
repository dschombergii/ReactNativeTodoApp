import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_tasks'

const state = () => {
    const [tasks, setTasks] = useState([])

    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, tasks)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const readData = async () => {
        try {
            const userTasks = await AsyncStorage.getItem(STORAGE_KEY)

            if (userTasks !== null) {
                setTasks(userTasks)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        readData()
    }, [])
}

export default state