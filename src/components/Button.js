import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, title, disabled }) => (
    <TouchableOpacity
        onPress={onPress}
        style={disabled ? styles.appButtonContainerDisabled : styles.appButtonContainer}
        disabled={disabled}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonContainerDisabled: {
        elevation: 8,
        backgroundColor: "#ccc",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "capitalize",
    },
});

export default Button;