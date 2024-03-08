import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../constants';

const Carousel = () => {
  const images = [
    require('../../assests/images/fn1.jpg'),
    require('../../assests/images/fn2.jpg'),
    require('../../assests/images/fn3.jpg'),
  ];

  return (
    <SliderBox
      images={images}
      ImageComponentStyle={{borderRadius: 15, width: '93%'}}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      autoplay
      circleLoop
    />
  );
};

export default Carousel;
