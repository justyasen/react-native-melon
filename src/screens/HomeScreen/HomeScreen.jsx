import React from "react";
import { View } from 'react-native';
import AudiRS7 from "../../components/AudiRS7";
import { styles } from './styles';


export const HomeScreen = () => {
    return (
      <View style={styles.page}> 
        <AudiRS7 />
      </View>
    );
};
