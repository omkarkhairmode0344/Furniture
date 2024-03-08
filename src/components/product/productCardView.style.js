import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 240,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  imageStyle: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: 8,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  prize: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.small,
  },
  plusBtn:{
    height:20,
    width:20,
  },
  addBtn:{
    position:'absolute',
    bottom:SIZES.small,
    right:SIZES.small,
  }
});

export default styles;
