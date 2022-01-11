import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import products from '../../stubs/products';

export const SearchBar = ({onSearch}) => {

    const onChangeSearch = (query) => {
        onSearch(query)
        setSearchQuery(query)
    }


    return(
    <View style={styles.container}>
        <TextInput placeholder='What are you looking for? '
        onChangeText={onChangeSearch}
        value={onSearch.searchQuery}
        />
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 1
    },

    searhText: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }, 
})