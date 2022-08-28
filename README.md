# InterviewAssignment
Assignment for interview

To run the project: 
  1. Clone project.
  2. run npm i in the terminal
  3. Also need to change react-native-snap-carousel src file from node_module. Because ViewPropTypes is removed from React Native and this package require it. So to resolve it follow the steps:
        i. install deprecated-react-native-prop-types. Like this npm install deprecated-react-native-prop-types,
        ii. Change all imports for react-native-snap-carousel to import {ViewPropTypes} from 'deprecated-react-native-prop-types';
        iii. Go to node_module/react-native-snap-carousel/src/ and change it from all files where it is used.


Screenshots of UI: 
![Screenshot_20220828_210905](https://user-images.githubusercontent.com/53207110/187082473-14821bf0-b1c4-4779-a021-ccf6131e4f76.png)
![Screenshot_20220828_211005](https://user-images.githubusercontent.com/53207110/187082475-2c57a45d-b610-455b-949f-63f57bd7d4a7.png)
![Screenshot_20220828_211032](https://user-images.githubusercontent.com/53207110/187082480-ad2f5f40-c1cb-40d2-9f06-bd0325d65cf4.png)
