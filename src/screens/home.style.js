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
  },
  cartNumber: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.lightWhite,
  },
});

export default styles;
