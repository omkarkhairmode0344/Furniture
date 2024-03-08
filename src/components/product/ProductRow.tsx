import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductCardView from './ProductCardView';
import {SIZES} from '../../constants';

const ProductRow = () => {
  const products = [1, 2, 3, 4];

  return (
    <View style={{marginHorizontal: 12}}>
      <FlatList
        data={products}
        renderItem={() => {
          return <ProductCardView></ProductCardView>;
        }}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}></FlatList>
    </View>
  );
};

export default ProductRow;
