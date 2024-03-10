import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const ProfileHead = props => {
  const btnPressed = () => {
    Alert.alert('Kindly Login First');
  };
  return (
    <TouchableOpacity onPress={btnPressed}>
      <View style={styles.container}>
        <Image source={props.source} style={styles.image}></Image>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: SIZES.width - 44,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.gray2,
    marginLeft: 20,
  },
  image: {
    height: 20,
    width: 20,
    marginLeft: 15,
    tintColor: COLORS.gray2,
  },
});

export default ProfileHead;
