import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { deleteTask, loadTasks } from '../../redux/actions/actions';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

const ViewItems = (props) => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteItem = id => dispatch(deleteTask(id));
    const loadItems = id => dispatch(loadTasks());

    useEffect(() => {
        loadItems()
        console.log(tasks)
    })

    return (
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#D3CCE3']} style={styles.container}>
            {tasks.length === 0 ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You do not have any tasks.</Text>
                </View>
            ) : (
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <ListItem
                            item={item}
                            deleteItem={() => deleteItem(item.id)} />
                    )}
                    keyExtractor={task => task.id}
                />
            )}
            <Button title="Add Task"
                onPress={() => {
                    Navigation.push(props.componentId, {
                        component: {
                            name: 'AddItem',
                        }
                    });
                }}
            />
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
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