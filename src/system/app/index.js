import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from '../../pages/home';
import Characters from '../../pages/characters';
import Houses from '../../pages/houses-characters';
import House from '../../pages/houses';
import colors from '../../assets/colors';

class App extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{backgroundColor: colors.main}}
        titleStyle={{color: colors.white}}>
        <Stack key="root">
          <Scene key="Home" component={Home}  />
          <Scene key="Characters" component={Characters} back />
          <Scene key="Houses" component={Houses} back />
          <Scene key="House" component={House}  initial hideNavBar/>
        </Stack>
      </Router>
    );
  }
}

export default App;
