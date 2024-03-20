import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: SIZES.small,
    right: SIZES.small,
    top: SIZES.small,
    zIndex: 999,
  },
  imageStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
  },
  image: {
    resizeMode: 'cover',
    aspectRatio: 1,
    height: '50%',
  },
  details: {
    backgroundColor: COLORS.lightWhite,
    flex: 1,
    marginTop: -SIZES.large,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
  },
  prizeWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
  },
  prize: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.small / 2,
  },
  ratingRow: {
    marginHorizontal: SIZES.large,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ratingStyle: {
    height: 20,
    width: 20,
    tintColor: 'gold',
    marginEnd: 2,
  },
  ratingText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.gray,
    paddingHorizontal: 8,
  },
  imageOneStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.gray,
  },
  descriptionWrapper: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.large,
  },
  descriptionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.medium - 2,
  },
  descriptionSubText: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
  },
  cartRow: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartBtn: {
    width: SIZES.width * 0.7 - 40,
    backgroundColor: COLORS.black,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: SIZES.large,
  },
  cartText: {
    color: COLORS.lightWhite,
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.small,
  },
  addCart: {
    backgroundColor: COLORS.black,
    height: 32,
    width: 32,
    borderRadius: 32,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default styles;
