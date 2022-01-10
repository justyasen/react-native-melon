import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export const SearchBar = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder='What are you looking for? ' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8
    },

    searhText: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }, 
})