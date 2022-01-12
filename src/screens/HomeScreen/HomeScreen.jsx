import React, { useState } from "react";
import { FlatList, View } from 'react-native';
import ProductItem from "../../components/ProductItem";
import { cars } from "../../stubs/products";
import { styles } from './styles';
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Divider } from "react-native-elements";
import { Button } from 'react-native';
import ProductScreen from '../ProductScreen/ProductScreen';
import { PRODUCT_ROUTE } from "../../utils/routes";
import product from "../../stubs/product";


export const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredCars = cars.filter(car => (car.title.toLowerCase().includes(searchTerm.toLowerCase())))

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
        data={filteredCars}
        renderItem={({item}) => <ProductItem item={item}/>}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />}
        />
      </View>
      </>
    );
};
