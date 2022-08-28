import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {heightScale, widthScale, screenWidth, screenHeight} from '../utils';
import {Fonts, MyTheme} from '../Constants';
import generalStyle from './../Styles/GeneralStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {colors} = MyTheme;

const ModalView = ({isModalOpen = false, onReqClose}) => {
  const Card = ({title, data}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    );
  };

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
          <View style={styles.headBox}>
            <Image
              source={require('../assets/Icons/Dropbox.png')}
              resizeMode="contain"
              style={styles.headimg}
            />
            <View style={styles.headTxtbox}>
              <Text style={styles.dbTxt}>Drop Box</Text>
              <AntDesign name="checkcircle" size={16} color="#1BA37A" />
            </View>
            <Text style={styles.timeSt}>12:00 AM</Text>
            <Text style={styles.priceTxt}>$550</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              height: heightScale(80),
            }}>
            {DATA.map(item => {
              return <Card title={item.title} data={`$${item.price}`} />;
            })}
          </ScrollView>
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
    marginTop: heightScale(5),
    marginBottom: heightScale(30),
  },
  btntxt: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: heightScale(15),
    color: colors.white,
  },
  dataview: {
    marginHorizontal: widthScale(30),
  },
  headBox: {
    alignItems: 'center',
    marginTop: heightScale(50),
  },
  headimg: {
    height: heightScale(60),
    width: heightScale(60),
  },
  headTxtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightScale(10),
  },
  dbTxt: {
    fontSize: heightScale(16),
    fontFamily: Fonts.PoppinsMedium,
    color: '#000000',
    marginRight: widthScale(10),
  },
  timeSt: {
    color: '#b6b6b6',
    fontFamily: Fonts.PoppinsRegular,
  },
  priceTxt: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: heightScale(28),
    marginVertical: heightScale(20),
    color: '#3d3b3b',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthScale(30),
  },
  title: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: heightScale(16),
  },
  data: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: heightScale(16),
  },
});

const DATA = [
  {
    title: 'Drop Box Pro 500GB',
    price: 400,
  },
  {
    title: 'Workspace',
    price: 50,
  },
  {
    title: 'Stream Maxx',
    price: 100,
  },
];
