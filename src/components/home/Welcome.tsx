import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './welcome.style';
import {COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          {' '}
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          {' '}
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assests/images/search.png')}
          style={styles.imageSearchStyle}></Image>
        <View style={styles.searchWrappper}>
          <TextInput
            placeholder="what are you looking for"
            style={styles.searchInput}
            onPressIn={() => navigation.navigate('Search')}></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={require('../../assests/images/camera.png')}
            style={styles.imageCameraStyle}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
