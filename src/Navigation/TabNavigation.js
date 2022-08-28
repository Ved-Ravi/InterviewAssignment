import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Message from '../Screens/Messages';
import CardsScreen from '../Screens/CardsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {MyTheme} from '../Constants';
import {View, Image, StyleSheet} from 'react-native';
import {heightScale} from '../utils';
const {colors} = MyTheme;

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
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
                  height: heightScale(24),
                  width: heightScale(24),
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
            <View style={styles.iconview}>
              <Image
                source={require('../assets/Icons/card.png')}
                resizeMode="contain"
                style={{
                  height: heightScale(24),
                  width: heightScale(24),
                  tintColor: focused ? colors.border : colors.white,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconview}>
              <Image
                source={require('../assets/Icons/message.png')}
                resizeMode="contain"
                style={{
                  height: heightScale(24),
                  width: heightScale(24),
                  tintColor: focused ? colors.border : colors.white,
                }}
              />
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
                  height: heightScale(24),
                  width: heightScale(24),
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
});

export default Tabs;
