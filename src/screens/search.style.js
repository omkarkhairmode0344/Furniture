import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.small,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    height: 50,
    position:'absolute',
    left:0,
    right:0,
    top:0
  },
  imageSearchStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.offwhite,
  },
  imageCameraStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
    tintColor: COLORS.gray,
  },
  searchWrappper: {
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    fontFamily: 'Poppins-Regular',
  },
  searchBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
