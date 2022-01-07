import React from "react";
import { FlatList, View } from 'react-native';
import ProductItem from "../../components/ProductItem";
import products from "../../stubs/products";
import { styles } from './styles';


export const HomeScreen = () => {
    return (
      <View style={styles.page}> 
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        />
      </View>
    );
};
