import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './search.style';

const Search = () => {
  return (
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
  );
};

export default Search;
