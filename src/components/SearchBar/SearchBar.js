import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import products from '../../stubs/products';
import { cars } from '../../stubs/products';

export const SearchBar = ({setSearchTerm, searchTerm}) => {

    return(
<>    
    <View>
        <TextInput placeholder = "Search products " onChangeText={setSearchTerm} value={searchTerm} />
    </View>
</>
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