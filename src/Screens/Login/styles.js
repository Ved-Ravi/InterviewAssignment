import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils';
import {Fonts, MyTheme} from '../../Constants';
import generalStyle from '../../Styles/GeneralStyle';
const {colors} = MyTheme;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageSet: {
    top: -heightScale(140),
  },

  heading: {
    marginTop: heightScale(80),
    color: 'white',
    fontSize: heightScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: heightScale(320),
  },
  btnview: {
    marginTop: heightScale(50),
    marginHorizontal: widthScale(50),
  },
  btn: {
    ...generalStyle.itemCenter,
    backgroundColor: colors.primary,
    borderRadius: heightScale(30),
    paddingVertical: heightScale(12),
    elevation: 5
  },
  btnTxt: {
    fontFamily: Fonts.UbuntuBold,
    fontSize: heightScale(16),
    color: colors.white,
  },
  fgtTxt: {
    fontSize: heightScale(12),
    marginTop: heightScale(8),
    alignSelf: 'flex-end',
  },
});

export default styles;
