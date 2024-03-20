import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const LoginComponent = props => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{props.title}</Text>
      </View>
      <View
        style={[
          props.error
            ? styles.errortextinputContainer
            : styles.textinputContainer,
        ]}>
        <Image source={props.source} style={styles.image}></Image>
        <TextInput
          placeholder={props.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          style={styles.inputText}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: SIZES.small,
    alignItems: 'flex-end',
  },
  subtitle: {
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  textinputContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errortextinputContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    height: 20,
    width: 20,
    marginLeft: 10,
    tintColor: COLORS.gray,
  },
  inputText: {
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
});

export default LoginComponent;
