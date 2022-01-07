import React from "react";
import { View } from 'react-native';
import ProductItem from "../../components/ProductItem";
import products from "../../stubs/products";
import { styles } from './styles';


export const HomeScreen = () => {
    return (
      <View style={styles.page}> 
        <ProductItem item={products[1]} />
      </View>
    );
};
