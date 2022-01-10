import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { ProductScreen } from './src/screens/ProductScreen/ProductScreen';
import SearchBar from './src/components/SearchBar';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Products" component={ProductScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView>
      <HomeScreen>
        <SearchBar/>
      </HomeScreen>
    </SafeAreaView>
  );
};

export default App;
