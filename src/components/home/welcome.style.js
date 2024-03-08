import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeText: (color, marginTop) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    marginHorizontal: SIZES.small,
    marginTop: marginTop,
    color: color,
  }),
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.small,
    marginBottom: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    height: 50,
  },
  imageSearchStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
    tintColor: COLORS.gray,
  },
  imageCameraStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.offwhite,
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
