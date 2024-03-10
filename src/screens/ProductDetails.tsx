import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './productDetails.style';
import {COLORS, SIZES} from '../constants';
import {useRoute} from '@react-navigation/native';

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assests/images/back..png')}
            style={styles.imageStyle}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assests/images/heart.png')}
            style={styles.imageStyle}></Image>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assests/images/fn1.jpg')}
        style={styles.image}></Image>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.prizeWrapper}>
            <Text style={styles.prize}>${item.prize}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <Image
                  key={index}
                  source={require('../assests/images/star.png')}
                  style={styles.ratingStyle}></Image>
              );
            })}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                increment();
              }}>
              <Image
                source={require('../assests/images/plus..png')}
                style={styles.imageOneStyle}></Image>
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                decrement();
              }}>
              <Image
                source={require('../assests/images/minus.png')}
                style={styles.imageOneStyle}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.descriptionSubText}>{item.description}</Text>
        </View>
        <View style={{marginTop: SIZES.small, marginHorizontal: SIZES.large}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assests/images/location.png')}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}></Image>
              <Text> Pune</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assests/images/delivery-truck.png')}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}></Image>
              <Text> Free Delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Image
              source={require('../assests/images/shopping-bag.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.lightWhite,
              }}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
