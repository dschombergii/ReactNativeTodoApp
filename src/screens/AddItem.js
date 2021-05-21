import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

import Button from '../components/Button';

const AddItem = ({ route, navigation }) => {
    const [title, setTitle] = useState('');
    const { addItem } = route.params;

    const onSaveTask = () => {
        addItem(title);
        navigation.goBack();
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