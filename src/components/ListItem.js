import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

Icon.loadFont();

const ListItem = ({ item, deleteItem }) => {
    const [finished, setFinished] = useState(false);

    const finishTask = () => {
        setFinished(!finished);
    };

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text
                    style={finished ? styles.finishedText : styles.listItemText}>
                    {item.task}
                </Text>
                <View style={styles.iconContainer}>
                    {!finished
                        ? <TouchableOpacity>
                            <Icon
                                style={styles.icon}
                                name="check" size={20}
                                color="green"
                                onPress={finishTask}
                            />
                        </TouchableOpacity>
                        : <TouchableOpacity>
                            <Icon
                                style={styles.icon}
                                name="undo" size={20}
                                color="black"
                                onPress={finishTask}
                            />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <Icon
                            style={styles.icon}
                            name="trash-o" size={20}
                            color="firebrick"
                            onPress={deleteItem}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    finishedText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: 'red',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    icon: {
        marginLeft: 20,
    },
});

export default ListItem;