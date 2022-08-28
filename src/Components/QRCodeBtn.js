import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React from 'react';
import {heightScale, widthScale, screenWidth, screenHeight} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import generalStyle from './../Styles/GeneralStyle';
const {colors} = MyTheme;

const QRCodeBtn = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.btnContainer}>
      <View
        style={{
          ...generalStyle.itemCenter,
          backgroundColor: colors.white,
        }}>
        <Image
          source={require('../assets/Icons/qrscanner.png')}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default QRCodeBtn;

const styles = StyleSheet.create({
  btnContainer: {
    top: -10,
    elevation: 5,
    backgroundColor: 'transparent'
  },
  img: {
    height: heightScale(65),
    width: heightScale(65),
    marginBottom: heightScale(32),
  },
});
