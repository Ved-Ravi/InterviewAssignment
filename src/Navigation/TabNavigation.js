import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Message from '../Screens/Messages';
import CardsScreen from '../Screens/CardsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import QRCodeScreen from '../Screens/QRCodeScreen';
import {MyTheme} from '../Constants';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {heightScale, widthScale} from '../utils';
import generalStyle from '../Styles/GeneralStyle';
import QRCodeBtn from '../Components/QRCodeBtn';
const {colors} = MyTheme;

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: heightScale(64),
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconview}>
              <Image
                source={require('../assets/Icons/home.png')}
                resizeMode="contain"
                style={{
                  ...styles.imgSize,
                  tintColor: focused ? colors.border : colors.white,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                ...styles.fullSize,
                backgroundColor: colors.white,
              }}>
              <View
                style={{
                  ...generalStyle.itemCenter,
                  ...styles.fullSize,
                  borderTopRightRadius: 50,
                  backgroundColor: colors.primary,
                }}>
                <Image
                  source={require('../assets/Icons/card.png')}
                  resizeMode="contain"
                  style={{
                    ...styles.imgSize,
                    marginRight: widthScale(40),
                    tintColor: focused ? colors.border : colors.white,
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="QRScanner"
        component={QRCodeScreen}
        options={{
          tabBarButton: props => <QRCodeBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                ...styles.fullSize,
                backgroundColor: colors.white,
              }}>
              <View
                style={{
                  ...generalStyle.itemCenter,
                  ...styles.fullSize,
                  borderTopLeftRadius: 50,
                  backgroundColor: colors.primary,
                }}>
                <Image
                  source={require('../assets/Icons/message.png')}
                  resizeMode="contain"
                  style={{
                    ...styles.imgSize,
                    marginLeft: widthScale(40),
                    tintColor: focused ? colors.border : colors.white,
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconview}>
              <Image
                source={require('../assets/Icons/profileuser.png')}
                resizeMode="contain"
                style={{
                  ...styles.imgSize,
                  tintColor: focused ? colors.border : colors.white,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconview: {
    alignItem: 'center',
  },
  imgSize: {
    height: heightScale(24),
    width: heightScale(24),
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

export default Tabs;
