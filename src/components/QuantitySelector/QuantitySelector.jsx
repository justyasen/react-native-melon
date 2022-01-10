import React from 'react';
import { View, Text, Pressable } from 'react-native';

const QuantitySelector = () => {
    const onMinus = () => {

    }

    const onPlus = () => {

    }

    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text> - </Text>
            </Pressable>

            <Text style={styles.quantity}> 0 </Text>

            <Pressable style={styles.button} onPress={onPlus}> 
                <Text style={styles.button}> + </Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector; 
