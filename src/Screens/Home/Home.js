import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import generalStyle from '../../Styles/GeneralStyle';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {heightScale, screenWidth, widthScale} from '../../utils';
import {useTheme} from '@react-navigation/native';
import CreditCard from '../../Components/CreditCard';
import MenuCard from '../../Components/MenuCard';
import {MenuOptions} from '../../Constants';
import ModalView from '../../Components/ModalView';

const Home = () => {
  const {colors} = useTheme();
  const [entries, setEntries] = useState([1, 2, 3]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [menu, setMenu] = useState(MenuOptions);
  const [isModalOpen, setModalOpen] = useState(false);

  const renderItem = () => {
    return <CreditCard />;
  };

  const renderMenuItem = ({item}) => {
    return <MenuCard name={item.name} icon={item.icon} />;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <SafeAreaView style={generalStyle.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require('../../assets/Images/homeBackground.png')}
        resizeMode="contain"
        style={styles.imageview}
        imageStyle={styles.image}>
        <ScrollView>
          <View style={styles.headingView}>
            <View style={styles.headTxtview}>
              <Text style={styles.greet}>Welcome back</Text>
              <Text style={styles.nameTxt}>Ved Ravi</Text>
            </View>
            <TouchableOpacity onPress={openModal}>
              <Image
                source={require('../../assets/Icons/notification.png')}
                style={styles.notfIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Carousel
              layout={'default'}
              data={entries}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
              containerStyle={{paddingVertical: 10, marginBottom: heightScale(5)}}
              dotsLength={3}
              activeDotIndex={activeSlide}
              dotColor={colors.primary}
              inactiveDotColor={colors.border}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: widthScale(5),
                backgroundColor: colors.primary,
              }}
              inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: colors.border,
              }}
              inactiveDotScale={0.8}
            />
          </View>

          <View style={styles.menuview}>
            <FlatList
              data={menu}
              renderItem={renderMenuItem}
              keyExtractor={item => item.name}
              numColumns={4}
            />
          </View>

          <View style={styles.graphcard}>
            <Text style={styles.grhead}>
              Cash
              <Text style={{color: '#2AC670'}}> in </Text> Cash
              <Text style={{color: '#F3A614'}}> Out </Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
      <ModalView
        isModalOpen={isModalOpen}
        onReqClose={() => setModalOpen(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
