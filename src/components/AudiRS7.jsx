import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { styles } from '../screens/HomeScreen/styles';

var backShot = require ('../assets/DSC05027.jpg');

const AudiRS7 = () => {
    return (
    <View style={styles.root}>
        <Image 
          style={styles.image}
          source={backShot}
       />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}> Audi RS7 </Text>

        <View style={styles.rating}>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star-half-full' size={18} color={'#E47911'}></FontAwesome> 

          <Text>554</Text> 
        </View>
        <Text style={styles.price}>
           $ 140 000
           <Text style={styles.oldPrice}>  $ 180 000 </Text>
           </Text> 
        <Text style={styles.textDescription}> This V8 beast has 600 horsepower and can do 0-100 km/h in around 3 seconds! </Text>
    </View>
</View>
    );
};

export default AudiRS7;
