import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from './styles'

export const HomeScreen = () => {
    return <View style={styles.title}>
       <Image 
       //style={styles.image}
       source={{uri: 'https://ibb.co/j41vk1J'}}
       />
     </View>
   };
