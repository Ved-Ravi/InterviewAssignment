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
    alignItems: 'center',
  },
  greet: {
    fontSize: heightScale(12),
    fontFamily: Fonts.UbuntuLight,
    marginBottom: heightScale(5),
  },
  nameTxt: {
    fontFamily: Fonts.UbuntuMedium,
    fontSize: heightScale(14),
  },
  notfIcon: {
    height: 24,
    width: 24,
  },
  menuview: {
    marginHorizontal: widthScale(24),
    alignItems: 'center',
  },
  graphcard: {
    height: 200,
    marginHorizontal: widthScale(24),
    borderRadius: 10,
    backgroundColor: colors.card,
    elevation: 5,
  },
  grhead: {
    fontFamily: Fonts.UbuntuRegular,
    color: '#000000',
    marginTop: heightScale(20),
    marginLeft: widthScale(14),
  },
});

export default styles;
