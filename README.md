# InterviewAssignment
Assignment for interview

To run the project: 
  1. Clone project.
  2. run npm i in the terminal
  3. Also need to change react-native-snap-carousel src file from node_module. Because ViewPropTypes is removed from React Native and this package require it. So to resolve it follow the steps:
        i. install deprecated-react-native-prop-types. Like this npm install deprecated-react-native-prop-types,
        ii. Change all imports for react-native-snap-carousel to import {ViewPropTypes} from 'deprecated-react-native-prop-types';
        iii. Go to node_module/react-native-snap-carousel/src/ and change it from all files where it is used.
