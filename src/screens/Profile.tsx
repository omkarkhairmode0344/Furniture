import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import ProfileHead from '../components/profile/ProfileHead';

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
        <View style={styles.profilesubContainer}>
          <Text style={styles.profilesubtitle}>johndoe@example.com</Text>
        </View>
        <View style={{marginTop: 15}}>
          <ProfileHead
            title="Favorites"
            source={require('../assests/images/favorites.png')}></ProfileHead>
          <ProfileHead 
          title="Orders"
          source={require('../assests/images/delivery-truck.png')}></ProfileHead>
          <ProfileHead 
          title="Cart"
          source={require('../assests/images/cart.png')}></ProfileHead>
          <ProfileHead 
          title="Clear Cache"
          source={require('../assests/images/clear-data.png')}></ProfileHead>
          <ProfileHead 
          title="Delete Account"
          source={require('../assests/images/delete-account.png')}></ProfileHead>
          <ProfileHead 
          title="Logout"
          source={require('../assests/images/out.png')}></ProfileHead>
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
    height: 120,
    width: 120,
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
  },
  profilesubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small,
  },
  profilesubContainer: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});

export default Profile;
