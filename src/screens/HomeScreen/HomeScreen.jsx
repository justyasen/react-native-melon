import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

//Requiring image 
var backShot = require ('../../assets/DSC05027.jpg');

export const HomeScreen = () => {
    return (
      <View style={styles.root}>
        <Image 
          style={styles.image}
          source={backShot}
       />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}> Audi RS7 </Text>
        <View style={styles.rating}>
          <FontAwesome name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome name = 'star-half-full' size={18} color={'#E47911'}></FontAwesome> 
        </View>
        <Text style={styles.price}> $ 140 000  </Text> 
        <Text style={styles.textDescription}> This V8 beast has 600 horsepower and can do 0-100 km/h in around 3 seconds! </Text>
      </View>

     </View>
     );
   };
