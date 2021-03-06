import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import SearchBar from './src/components/SearchBar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PRODUCT_ROUTE } from './src/utils/routes';
import { HOME_ROUTE } from './src/utils/routes';
import { useState } from 'react';
import { filter } from "lodash-filter";


const App: () => Node = () => {

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={HOME_ROUTE} component={HomeScreen} />
      <Stack.Screen name={PRODUCT_ROUTE} component={ProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
