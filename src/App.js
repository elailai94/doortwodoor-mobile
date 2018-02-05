/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Store from './store';
import { registerScreens } from './screens';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//     };
//   }

//   render() {
//     if (!this.state.user) {
//       Navigation.startSingleScreenApp({
//         screen: {
//           screen: 'doortwodoor.SignUp',
//           title: 'Sign Up',
//         },
//       });
//     }

//     return (
//       <Provider store={Store}>
//         <View style={styles.container}>
//           <Text style={styles.welcome}>
//             Welcome to React Native!
//           </Text>
//           <Text style={styles.instructions}>
//             To get started, edit App.js
//           </Text>
//           <Text style={styles.instructions}>
//             {instructions}
//           </Text>
//         </View>
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default App;

registerScreens(Store, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Profile',
      screen: 'doortwodoor.Profile',
      title: 'Profile',
    },
    {
      label: 'Sign Up',
      screen: 'doortwodoor.SignUp',
      title: 'Sign Up',
    }
  ],
});
