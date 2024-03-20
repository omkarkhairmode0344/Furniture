import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LoginComponent from '../components/login/LoginComponent';
import {COLORS, SIZES} from '../constants';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [passward, setPassward] = useState('');
  const [error, setError] = useState({
    username: '',
    email: '',
    location: '',
    passward: '',
  });

  const signupBtnPressed = () => {
    if (!username) {
      setError({
        username: 'Username can not be empty',
        email: '',
        location: '',
        passward: '',
      });
    } else if (!email) {
      setError({
        username: '',
        email: 'Email can not be empty',
        location: '',
        passward: '',
      });
    } else if (!location) {
      setError({
        username: '',
        email: '',
        location: 'Location can not be empty',
        passward: '',
      });
    } else if (!passward) {
      setError({
        username: '',
        email: '',
        location: '',
        passward: 'Passward can not be empty',
      });
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assests/images/bk.png')}
        style={styles.background}></Image>
      <View style={{position: 'absolute', top: 20, left: 12}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            source={require('../assests/images/back..png')}
            style={{height: 20, width: 20, tintColor: COLORS.gray}}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Sign up and start shopping</Text>
        </View>
        <LoginComponent
          title="Username"
          placeholder="Enter username"
          source={require('../assests/images/user-name.png')}
          onChangeText={setUsername}
          error={error.username}></LoginComponent>
        {error.username ? (
          <Text style={{color: 'red'}}>{error.username}</Text>
        ) : null}
        <LoginComponent
          title="Email"
          placeholder="Enter email"
          source={require('../assests/images/mail.png')}
          onChangeText={setEmail}
          error={error.email}></LoginComponent>
        {error.email ? <Text style={{color: 'red'}}>{error.email}</Text> : null}
        <LoginComponent
          title="Location"
          placeholder="Location"
          source={require('../assests/images/location.png')}
          onChangeText={setLocation}
          error={error.location}></LoginComponent>
        {error.location ? (
          <Text style={{color: 'red'}}>{error.location}</Text>
        ) : null}
        <LoginComponent
          title="Passward"
          placeholder="Passward"
          secureTextEntry={true}
          source={require('../assests/images/passward.png')}
          onChangeText={setPassward}
          error={error.passward}></LoginComponent>
        {error.passward ? (
          <Text style={{color: 'red'}}>{error.passward}</Text>
        ) : null}
        <TouchableOpacity
          onPress={signupBtnPressed}
          style={styles.loginContainer}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  background: {
    height: SIZES.height * 0.3,
    resizeMode: 'contain',
    width: SIZES.width,
  },
  headingContainer: {
    marginTop: SIZES.large,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: COLORS.primary,
  },
  loginContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    height: 45,
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
});

export default SignUpScreen;
