import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductCardView from './ProductCardView';
import {SIZES} from '../../constants';
import ProductData from '../../JSON/data.json';

const ProductRow = () => {

  return (
    <View style={{marginHorizontal: 12}}>
      <FlatList
        data={ProductData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ProductCardView item={item}></ProductCardView>;
        }}
        horizontal
        ></FlatList>
    </View>
  );
};

export default ProductRow;
