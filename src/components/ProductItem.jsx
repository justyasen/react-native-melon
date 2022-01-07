import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { styles }  from '../screens/HomeScreen/styles';
import products from '../stubs/products';

//var backShot = require ('../assets/DSC05027.jpg');

interface ProductItemProperties {
  item: {
    id: string,
    title: string,
    image: string,
    avgRating: number,
    ratings: number,
    price: number,
    oldPrice?: number, //Putting ? to show this property is optional. 
  }; 
}

const ProductItem = (props: ProductItemProperties) => {
  const item = props.item; 
    return (
    <View style={styles.root}>
        <Image 
          style={styles.image}
          source={item.image}
       />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}> {item.title} </Text>

        <View style={styles.rating}>

          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star' size={18} color={'#E47911'}></FontAwesome>
          <FontAwesome style={styles.star} name = 'star-half-full' size={18} color={'#E47911'}></FontAwesome> 

          <Text>554</Text> 
        </View>
        <Text style={styles.price}>
           {item.price}
           <Text style={styles.oldPrice}>  {item.oldPrice} </Text>
           </Text> 
        <Text style={styles.textDescription}> {item.description} </Text>
    </View>
</View>
    );
};

export default ProductItem;
