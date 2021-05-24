import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import { addTask } from '../../redux/actions/actions';
import Button from '../../components/Button';

const AddItem = (props) => {
    const [task, setTask] = useState({
        title: '',
        details: '',
    });

    const dispatch = useDispatch();

    const addItem = task => dispatch(addTask(task));
    // dispatch add item action on submit, which also saves to AsyncStorage,
    // pop add item screen from navigation stack
    const onSaveTask = () => {
        addItem(task)
        Navigation.pop(props.componentId);
    };

    return (
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#D3CCE3']} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        label='What do you need to do?'
                        value={task.title}
                        mode='flat'
                        onChangeText={text => setTask({ ...task, title: text })}
                        style={styles.input}
                    />
                    <TextInput
                        multiline
                        label='Task details...'
                        value={task.details}
                        mode='flat'
                        onChangeText={text => setTask({ ...task, details: text })}
                        style={styles.input}
                    />
                </View>
                <Button
                    title="Add Task"
                    disabled={task.title === '' ? true : false}
                    onPress={() => onSaveTask()}
                />
            </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 40,
    },
    input: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default AddItem;