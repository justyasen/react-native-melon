import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from './styles'

//Requiring image 
var backShot = require ('../../assets/DSC05027.jpg');

export const HomeScreen = () => {
    return <View style={styles.title}>
       <Image 
       style={styles.image}
       source={backShot}
       />
     </View>
   };
