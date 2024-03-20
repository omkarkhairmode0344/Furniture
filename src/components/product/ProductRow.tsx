import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductCardView from './ProductCardView';
import ProductData from '../../JSON/data.json';

const ProductRow = () => {
  /*
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  */

  return (
    <View style={{marginHorizontal: 12}}>
      <FlatList
        data={ProductData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ProductCardView item={item}></ProductCardView>;
        }}
        horizontal></FlatList>
    </View>
  );
};

export default ProductRow;
