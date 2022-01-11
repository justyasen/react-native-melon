import React, { useState } from "react";
import { FlatList, View } from 'react-native';
import ProductItem from "../../components/ProductItem";
import { cars as productsStub } from "../../stubs/products";
import { styles } from './styles';
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Divider } from "react-native-elements";
import { Button } from 'react-native';
import ProductScreen from '../ProductScreen/ProductScreen';
import { PRODUCT_ROUTE } from "../../utils/routes";
import product from "../../stubs/product";


export const HomeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState(productsStub)

    const filterProducts = (query) => {
      if(!query){
        return setProducts(productsStub);
      }
      const filteredProducts = products.filter((product) => (
      product.title.includes(query)
      ))
        setProducts(filteredProducts);
        console.warn(filteredProducts); 
    }

    const onPressHandler = () => {
      navigation.navigate(PRODUCT_ROUTE);
    }

    return (
      <>
      <View> 
        <Button title="Product details" onPress={onPressHandler} />
      </View>

      <View style={styles.page}> 
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <SearchBar onSearch={filterProducts}/>}
        />
      </View>
      </>
    );
};
