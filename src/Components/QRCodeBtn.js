import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {heightScale, widthScale, screenWidth, screenHeight} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import generalStyle from './../Styles/GeneralStyle';
const {colors} = MyTheme;

const QRCodeBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <View
        style={{
          ...generalStyle.itemCenter,
          backgroundColor: colors.background,
        }}>
        <Image
          source={require('../assets/Icons/qrscanner.png')}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
    </TouchableOpacity>
  );
};

export default QRCodeBtn;

const styles = StyleSheet.create({
  btnContainer: {
    top: -10,
    elevation: 5,
  },
  img: {
    height: heightScale(60),
    width: heightScale(60),
    marginBottom: heightScale(32),
  },
});
