import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './search.style';
import {COLORS, SIZES} from '../constants';

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightWhite,
      }}>
      <Image
        source={require('../assests/images/Pose23.png')}
        style={{
          width: 250,
          resizeMode: 'contain',
        }}></Image>
      <View style={styles.searchContainer}>
        <Image
          source={require('../assests/images/camera.png')}
          style={styles.imageCameraStyle}></Image>
        <View style={styles.searchWrappper}>
          <TextInput
            placeholder="what are you looking for"
            style={styles.searchInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={require('../assests/images/search.png')}
            style={styles.imageSearchStyle}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
