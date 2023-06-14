import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const GRADIENT_IMAGE = require('../assets/gradientOverlay.png');
const GRADIENT_COLOR = '#fff';

const ScrollBarGradient = ({
  left,
  width = 76,
  margins = 0,
}) => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      view: {
        opacity: 1,
    <View pointerEvents="none" style={styles.view}>
      <Image
        source={GRADIENT_IMAGE}
        style={styles.image}
        resizeMode={'stretch'}
      />
    </View>
  );
};

ScrollBarGradient.displayName = 'IGNORE';

export default ScrollBarGradient;
