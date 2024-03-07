import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeText: (color, marginTop) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    marginHorizontal: SIZES.small,
    marginTop: marginTop,
    color: color,
  }),
});

export default styles;
