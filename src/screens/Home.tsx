import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './home.style';
import Welcome from '../components/home/Welcome';

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            source={require('../assests/images/location.png')}
            style={styles.imageStyle}></Image>
          <Text style={styles.textLocationStyle}>India</Text>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assests/images/shopping-bag.png')}
                style={styles.imageStyle}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Welcome></Welcome>
    </View>
  );
};

export default Home;
