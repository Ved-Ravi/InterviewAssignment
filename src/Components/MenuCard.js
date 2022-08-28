import {TouchableOpacity,StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {heightScale, widthScale} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import generalStyle from '../Styles/GeneralStyle';
const {colors} = MyTheme;

const MenuCard = ({name, icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Image source={icon} />
      </View>
      <Text style={styles.crdTxt} numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    height: widthScale(95),
    width: widthScale(70),
    marginHorizontal: widthScale(5),
    marginBottom: heightScale(10)
  },
  card: {
    height: widthScale(70),
    width: widthScale(70),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 5,
    ...generalStyle.itemCenter,
  },
  crdTxt: {
    marginTop: heightScale(5),
    fontFamily: Fonts.UbuntuRegular,
    fontSize: heightScale(10),
    alignSelf: 'center'
  },
});
