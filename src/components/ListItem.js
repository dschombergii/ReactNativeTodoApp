import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

Icon.loadFont();

const ListItem = ({ item, deleteItem }) => {
    const [finished, setFinished] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    const finishTask = () => {
        setFinished(!finished);
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text
                    style={finished ? styles.finishedText : styles.listItemText}>
                    {item.title}
                </Text>
                {!showDetails
                    ? <TouchableOpacity>
                        <Icon
                            // style={styles.icon}
                            name="chevron-down"
                            size={20}
                            color="#009688"
                            onPress={toggleDetails}
                        />
                    </TouchableOpacity>
                    : <TouchableOpacity>
                        <Icon
                            // style={styles.icon}
                            name="chevron-up"
                            size={20}
                            color="#009688"
                            onPress={toggleDetails}
                        />
                    </TouchableOpacity>
                }
            </View>
            <View style={!showDetails ? styles.detailsContainerHidden : styles.detailsContainer}>
                <Text style={finished ? styles.finishedDetailsText : styles.detailsText}>
                    {item.details}
                </Text>
                <View style={styles.iconContainer}>
                    {!finished
                        ? <TouchableOpacity
                            style={styles.icon}
                            onPress={finishTask}>
                            <Icon
                                name="check"
                                size={20}
                                color="green"
                            />
                        </TouchableOpacity>
                        : <TouchableOpacity
                            style={styles.icon}
                            onPress={finishTask}>
                            <Icon
                                name="undo"
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={deleteItem}>
                        <Icon
                            name="trash-o"
                            size={20}
                            color="firebrick"
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
    detailsContainer: {
        display: 'flex',
        paddingTop: 10,
    },
    detailsContainerHidden: {
        display: 'none',
    },
    detailsText: {
        color: 'gray',
        fontSize: 14,
        fontStyle: 'italic',
    },
    finishedDetailsText: {
        color: 'gray',
        fontSize: 14,
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: 'gray',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    icon: {
        width: '49%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ListItem;