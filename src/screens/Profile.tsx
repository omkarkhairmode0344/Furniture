import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/space.jpg')}
        style={styles.image}></Image>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assests/images/profile.jpeg')}
          style={styles.profileimage}></Image>
        <Text style={styles.profiletitle}>John Doe</Text>
        <View>
          <Text style={styles.profilesubContainer}>johndoe@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: SIZES.height * 0.3,
    width: SIZES.width,
    resizeMode: 'cover',
  },
  profileimage: {
    height: 150,
    width: 150,
    marginTop: -75,
    borderRadius: 75,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.lightWhite,
  },
  profiletitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    marginTop: 5,
  },
  profilesubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small,
    marginTop: 5,
  },
  profilesubContainer: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});

export default Profile;
