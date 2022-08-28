import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {heightScale, widthScale} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import LinearGradient from 'react-native-linear-gradient';
const {colors} = MyTheme;

const CreditCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#288D90', '#54BAB9']}
      style={styles.card}>
      <Image
        source={require('../assets/Icons/addIcon.png')}
        style={styles.addimg}
      />
      <View style={styles.blancview}>
        <Text style={styles.blanctxt}>Balance</Text>
        <Text style={styles.blancVal}> $ 675.00</Text>
      </View>
      <Text style={styles.numtxt}>2 2 1 3   4 5 6 3   6 7 8 9   6 4 5 7</Text>
      <View style={styles.chipview}>
        <Image
          source={require('../assets/Icons/Chip.png')}
          style={styles.chipimg}
        />
        <Image
          source={require('../assets/Icons/Mastercard.png')}
          style={styles.compimg}
        />
      </View>
    </LinearGradient>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  card: {
    height: heightScale(200),
    width: widthScale(320),
    // backgroundColor: colors.primary,
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 5,
  },
  addimg: {
    position: 'absolute',
    right: 26,
    top: 26
  },
  blancview: {
    margin: heightScale(26),
  },
  blanctxt: {
    fontSize: heightScale(14),
    fontFamily: Fonts.UbuntuLight,
    color: colors.white,
    marginLeft: widthScale(5),
  },
  blancVal: {
    marginTop: heightScale(6),
    fontSize: heightScale(18),
    fontFamily: Fonts.UbuntuMedium,
    color: colors.white,
  },
  numtxt: {
    fontFamily: Fonts.NunitoRegular,
    fontSize: heightScale(15),
    color: colors.white,
    marginLeft: heightScale(26),
  },
  chipview: {
    marginHorizontal: heightScale(26),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightScale(32),
    alignItems: 'center',
  },
  chipimg: {
    height: heightScale(24),
    width: heightScale(32),
  },
  compimg: {
    height: heightScale(36),
    width: heightScale(62),
  },
});
