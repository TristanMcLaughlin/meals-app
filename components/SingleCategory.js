import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SingleCategory = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.color} }}>
                <Text style={styles.title} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
    },
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    title: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default SingleCategory;