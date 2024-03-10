import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './headings.style';
import {useNavigation} from '@react-navigation/native';

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductList');
          }}>
          <Image
            source={require('../../assests/images/grid.png')}
            style={styles.imageStyle}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
