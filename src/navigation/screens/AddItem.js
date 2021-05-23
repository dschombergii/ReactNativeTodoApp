import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation'
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/actions/actions';

import Button from '../../components/Button';

const AddItem = (props) => {
    const [task, setTask] = useState({
        title: '',
        details: ''
    });

    const dispatch = useDispatch();

    const addItem = task => dispatch(addTask(task));

    const onSaveTask = () => {
        addItem(task)
        Navigation.pop(props.componentId);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TextInput
                    label='What do you need to do?'
                    value={task.title}
                    mode='flat'
                    onChangeText={text => setTask({ ...task, title: text })}
                    style={styles.title}
                />
                <TextInput
                    multiline
                    label='Task details...'
                    value={task.details}
                    mode='flat'
                    onChangeText={text => setTask({ ...task, details: text })}
                    style={styles.title}
                />
            </View>
            <Button
                title="Add Task"
                disabled={task.title === '' ? true : false}
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