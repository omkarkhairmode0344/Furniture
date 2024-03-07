import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.black,
  },
  textLocationStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: 'absolute',
    bottom: 12,
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: 'Poppins-Regular',
    fontSize: 6,
    fontWeight: '600',
    color: COLORS.lightWhite,
  },
});

export default styles;
