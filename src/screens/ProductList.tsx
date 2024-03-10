import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './productList.style';
import ProductData from '../JSON/data.json';
import ProductCardView from '../components/product/ProductCardView';

const ProductList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assests/images/back..png')}
            style={styles.image}></Image>
        </TouchableOpacity>
        <Text style={styles.productTitle}>Products</Text>
      </View>
      <FlatList
        data={ProductData}
        renderItem={({item}) => {
          return <ProductCardView item={item}></ProductCardView>;
        }}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
        showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
};

export default ProductList;
