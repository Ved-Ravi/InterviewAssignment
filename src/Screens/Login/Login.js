import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import generalStyle from '../../Styles/GeneralStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import IconTextInput from '../../Components/IconTextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {heightScale} from '../../utils';

const Login = ({navigation}) => {
  const {colors} = useTheme();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = newTxt => {
    setUserName(newTxt);
  };
  const onChangePassword = newTxt => {
    setPassword(newTxt);
  };
  const onLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={generalStyle.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require('../../assets/Images/backgroundImg.png')}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.imageSet}>
        <View>
          <Text style={styles.heading}>Welcome</Text>
          <View style={styles.inputContainer}>
            <IconTextInput
              onChangeText={onChangeUserName}
              value={userName}
              placeholder="Username"
              Icons={
                <FontAwesome
                  name="user"
                  size={heightScale(20)}
                  color={colors.border}
                />
              }
            />
            <IconTextInput
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              isSecure={true}
              Icons={
                <Octicons
                  name="lock"
                  size={heightScale(20)}
                  color={colors.border}
                />
              }
            />
            <View style={styles.btnview}>
              <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={styles.btnTxt}>Login</Text>
              </TouchableOpacity>

              <Text style={styles.fgtTxt}>Forget Password ?</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
