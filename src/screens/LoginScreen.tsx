import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import LoginComponent from '../components/login/LoginComponent';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');
  const [error, setError] = useState({emailError: '', passwardError: ''});

  const loginBtnPressed = () => {
    if (!email) {
      setError({emailError: 'Email can not be empty', passwardError: ''});
    } else if (!passward) {
      setError({emailError: '', passwardError: 'Passward can not be empty'});
    } else navigation.navigate('BottomTab');
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assests/images/bk.png')}
        style={styles.background}></Image>
      <View style={{position: 'absolute', top: 20, left: 12}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTab');
          }}>
          <Image
            source={require('../assests/images/back..png')}
            style={{height: 20, width: 20, tintColor: COLORS.gray}}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
        </View>
        <LoginComponent
          title="Email"
          placeholder="Enter email"
          source={require('../assests/images/mail.png')}
          onChangeText={setEmail}
          error={error.emailError}></LoginComponent>
        {error.emailError ? (
          <Text style={{color: 'red'}}>{error.emailError}</Text>
        ) : null}
        <LoginComponent
          title="Passward"
          placeholder="Passward"
          secureTextEntry={true}
          source={require('../assests/images/passward.png')}
          onChangeText={setPassward}
          error={error.passwardError}></LoginComponent>
        {error.passwardError ? (
          <Text style={{color: 'red'}}>{error.passwardError}</Text>
        ) : null}
        <TouchableOpacity
          onPress={loginBtnPressed}
          style={styles.loginContainer}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </View>
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
    height: SIZES.height * 0.45,
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
  registerContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  registerText: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.primary,
  },
});

export default LoginScreen;
