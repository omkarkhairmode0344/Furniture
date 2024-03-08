import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './productCardView.style';
import {useNavigation} from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assests/images/fn1.jpg')}
            style={styles.imageStyle}></Image>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Supplier
          </Text>
          <Text style={styles.prize}>$1650</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Image
            source={require('../../assests/images/plus.png')}
            style={styles.plusBtn}></Image>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
