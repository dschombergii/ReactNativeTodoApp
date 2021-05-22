import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation'
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import { addTask, saveTasks } from '../../redux/actions/actions';

import Button from '../../components/Button';

const AddItem = (props) => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const addItem = task => dispatch(addTask(task));
    const saveItem = () => dispatch(saveTasks())

    const onSaveTask = () => {
        addItem(title);
        saveItem();
        Navigation.push(props.componentId, {
            component: {
                name: 'ViewItems'
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TextInput
                    label='What do you need to do?'
                    value={title}
                    mode='flat'
                    onChangeText={setTitle}
                    style={styles.title}
                />
            </View>
            <Button
                title="Add Task"
                disabled={title === '' ? true : false}
                onPress={() => onSaveTask()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
    },
});

export default AddItem;