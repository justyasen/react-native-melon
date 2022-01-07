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
    price: string,
    oldPrice?: string, //Putting ? to show this property is optional. 
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
          {[0,0,0,0,0].map((element, i) => 
          <FontAwesome
          
          key={`${item.id}-${i}`}
          style={styles.star}
          name = {i < Math.floor(item.avgRating) ? 'star' : 'star-o'} //if index is lower than the avgRating, it will round the avgRating to the lower number - for example - 4.2 will become 4. And it will display 4 stars. 
          size={18} 
          color={'#E47911'}>

          </FontAwesome>)
          }

          <Text>{item.ratings}</Text> 
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
