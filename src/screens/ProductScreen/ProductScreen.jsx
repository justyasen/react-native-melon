import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import product from '../../stubs/product';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector'

const ProductScreen = () => {
    return (
    <View>
        <Text style={styles.title}>{product.title}</Text>
        
        <Text style={styles.price}>
            {product.price}
            <Text style={styles.oldPrice}>  {product.oldPrice} </Text>
        </Text>

        <Text style={styles.textDescription}> {product.description} </Text>

        <QuantitySelector />
    </View>
    )
}

export default ProductScreen;
