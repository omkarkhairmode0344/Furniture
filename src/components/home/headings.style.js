import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
  },
  imageStyle: {
    height: 20,
    width: 20,
  },
});

export default styles;
