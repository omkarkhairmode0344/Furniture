import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    margin: SIZES.large,
  },
  productContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SIZES.small,
    marginBottom: SIZES.large,
  },
  productTitle: {
    color: COLORS.lightWhite,
    paddingVertical: 6,
    color: COLORS.lightWhite,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: SIZES.small,
    fontSize: 15,
  },
  image: {
    height: 20,
    width: 20,
    tintColor: COLORS.lightWhite,
  },
  seperator: {
    height: 16,
  },
});

export default styles;
