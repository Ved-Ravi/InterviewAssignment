import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {heightScale, widthScale, screenWidth, screenHeight} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import generalStyle from './../Styles/GeneralStyle';
const {colors} = MyTheme;

const ModalView = ({isModalOpen = false, onReqClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={onReqClose}>
      <View style={{...generalStyle.container, ...styles.modalBackground}}>
        <View style={styles.shadeBg} />
        <View style={styles.popUp}>
          <Image
            resizeMode="contain"
            source={require('../assets/Icons/share.png')}
            style={styles.share}
          />
          <View style={styles.dataview}>
            <TouchableOpacity style={styles.btn} onPress={onReqClose}>
              <Text style={styles.btntxt}>Ok, close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;

const PopUpHeight = heightScale(420);
const BorderRadius = heightScale(70);

const styles = StyleSheet.create({
  modalBackground: {
    justifyContent: 'flex-end',
  },
  shadeBg: {
    height: screenHeight,
    width: screenWidth,
    position: 'absolute',
    backgroundColor: colors.primary,
    opacity: 0.7,
  },
  popUp: {
    height: PopUpHeight,
    width: '100%',
    borderTopRightRadius: BorderRadius,
    borderTopLeftRadius: BorderRadius,
    backgroundColor: colors.card,
  },
  share: {
    height: heightScale(24),
    width: heightScale(24),
    position: 'absolute',
    right: 40,
    top: 40,
  },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    ...generalStyle.itemCenter,
    paddingVertical: 10,
    marginVertical: heightScale(30),
  },
  btntxt: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: heightScale(15),
    color: colors.white,
  },
  dataview: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignSelf: 'center',
    marginHorizontal: widthScale(30),
  },
});
