import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './headings.style';

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assests/images/grid.png')}
            style={styles.imageStyle}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
