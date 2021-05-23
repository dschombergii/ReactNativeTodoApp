import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation'
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { deleteTask, completeTask, loadTasks, saveTasks } from '../../redux/actions/actions';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import AsyncStorage from '@react-native-community/async-storage';

const ViewItems = (props) => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteItem = id => dispatch(deleteTask(id));
    const completeItem = id => dispatch(completeTask(id));
    const loadItems = () => dispatch(loadTasks());
    // const saveItems = () => dispatch(saveTasks(tasks));

    // useEffect(() => {
    //     loadItems()
    // }, []);

    // useEffect(() => {
    //     saveItems()
    //     console.log("tasks", tasks)
    // }, [tasks])

    return (
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#D3CCE3']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                {tasks.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any tasks.</Text>
                    </View>
                ) : (
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) => (
                            console.log("item", item),
                            <ListItem
                                item={item}
                                key={item}
                                deleteItem={() => deleteItem(item.id)}
                                completeItem={() => completeItem(item.id)}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                )}
                <Button title="Add Task"
                    onPress={() => {
                        Navigation.push(props.componentId, {
                            component: {
                                name: 'AddItem',
                                options: {
                                    topBar: {
                                        title: { text: 'Add Item', color: 'white' },
                                        background: { color: '#009688' },
                                        backButton: { color: 'white' },
                                    },
                                },
                            }
                        });
                    }}
                />
            </SafeAreaView>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
});

export default ViewItems;