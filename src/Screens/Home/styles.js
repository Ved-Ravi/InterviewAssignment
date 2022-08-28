import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils';
import {Fonts, MyTheme} from '../../Constants';
import generalStyle from '../../Styles/GeneralStyle';
const {colors} = MyTheme;

const styles = StyleSheet.create({
  imageview: {
    flex: 1,
  },
  image: {
    top: -heightScale(300),
  },
  headingView: {
    margin: widthScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  greet: {
    fontSize: heightScale(12),
    fontFamily: Fonts.UbuntuLight,
    marginBottom: heightScale(5)
  },
  nameTxt: {
    fontFamily: Fonts.UbuntuMedium,
    fontSize: heightScale(14)
  },
  notfIcon: {
    height: 24,
    width: 24
  },
  menuview: {
    marginHorizontal: widthScale(24),
    alignItems: 'center'
  }
});

export default styles;
