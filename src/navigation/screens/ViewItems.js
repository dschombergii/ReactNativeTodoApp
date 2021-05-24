import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { deleteTask, editTask, loadTasks } from '../../redux/actions/actions';

import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

const ViewItems = (props) => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteItem = id => dispatch(deleteTask(id));
    const editItem = id => dispatch(editTask(id));
    const loadItems = () => dispatch(loadTasks());

    // load from AsyncStorage on mount
    useEffect(() => {
        loadItems()
    }, []);

    return (
        <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#D3CCE3']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                {
                    tasks.length === 0 ? (
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>You do not have any tasks.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={tasks}
                            renderItem={({ item }) => (
                                <ListItem
                                    item={item}
                                    key={item}
                                    // passing actions as props to list item
                                    deleteItem={() => deleteItem(item.id)}
                                    editItem={() => editItem(item.id)}
                                    completeItem={() => completeItem(item.id)}
                                />
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    )}
                <Button title="Add Task"
                    onPress={() => {
                        // navigate to add item screen 
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