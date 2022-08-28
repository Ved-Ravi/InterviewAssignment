import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {heightScale, widthScale} from '../utils';
import {MyTheme, Fonts} from '../Constants';
const {colors} = MyTheme;

const IconTextInput = ({
  value,
  onChangeText,
  placeholder,
  Icons,
  isSecure = false,
}) => {
  return (
    <View style={styles.container}>
      {Icons}

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: colors.border,
    height: heightScale(45),
    marginHorizontal: widthScale(50),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.card,
    paddingHorizontal: widthScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: heightScale(5)
  },
  input: {
    flex: 1,
    fontFamily: Fonts.UbuntuRegular,
    fontSize: heightScale(14),
    marginLeft: widthScale(20),
    color: colors.border
  },
});
