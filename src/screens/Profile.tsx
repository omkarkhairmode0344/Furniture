import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import ProfileHead from '../components/profile/ProfileHead';

const Profile = ({navigation}) => {
  const [userlogin, setUserlogin] = useState(true);

  const logoutBtnPressed = () => {
    Alert.alert('Logout', 'Are you sure you want to logout', [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      {text: 'Continue', onPress: () => console.log('Continue Pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/space.jpg')}
        style={styles.image}></Image>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assests/images/profile.jpeg')}
          style={styles.profileimage}></Image>

        <Text style={styles.profiletitle}>
          {userlogin === false ? 'Please login into your account' : 'John Doe'}
        </Text>

        {userlogin === false ? (
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.profilesubContainer}>
              <Text style={styles.profilesubtitle}>L O G I N</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <View style={styles.profilesubContainer}>
              <Text style={styles.profilesubtitle}>johndoe@example.com</Text>
            </View>
          </TouchableOpacity>
        )}

        {userlogin === false ? (
          <View></View>
        ) : (
          <View style={{marginTop: 15}}>
            <ProfileHead
              title="Favorites"
              source={require('../assests/images/favorites.png')}
              onPress={() => {
                Alert.alert('Pressed');
              }}></ProfileHead>
            <ProfileHead
              title="Orders"
              source={require('../assests/images/delivery-truck.png')}
              onPress={() => {
                Alert.alert('Pressed');
              }}></ProfileHead>
            <ProfileHead
              title="Cart"
              source={require('../assests/images/cart.png')}
              onPress={() => {
                Alert.alert('Pressed');
              }}></ProfileHead>
            <ProfileHead
              title="Clear Cache"
              source={require('../assests/images/clear-data.png')}
              onPress={() => {
                Alert.alert('Pressed');
              }}></ProfileHead>
            <ProfileHead
              title="Delete Account"
              source={require('../assests/images/delete-account.png')}
              onPress={() => {
                Alert.alert('Pressed');
              }}></ProfileHead>
            <ProfileHead
              title="Logout"
              source={require('../assests/images/out.png')}
              onPress={logoutBtnPressed}></ProfileHead>
          </View>
        )}
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
    fontWeight: '700',
    paddingHorizontal: 5,
    lineHeight: 26,
  },
  profilesubContainer: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});

export default Profile;
