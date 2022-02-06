import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from '../../pages/home';
import Characters from '../../pages/characters';
import Houses from '../../pages/houses-characters';
import House from '../../pages/houses';
import FormHome from '../../pages/form';
import colors from '../../assets/colors';
import {Provider} from 'react-redux';
import store from '../../config/redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          navigationBarStyle={{backgroundColor: colors.main}}
          titleStyle={{
            color: colors.white,
            fontFamily: 'copperplate',
            fontSize: 22,
          }}>
          <Stack key="root">
            <Scene key="Home" component={Home} />
            <Scene
              key="Characters"
              component={Characters}
              back
              navBarButtonColor={colors.white}
            />
            <Scene
              key="Houses"
              component={Houses}
              back
              navBarButtonColor={colors.white}
            />
            <Scene key="House" component={House} hideNavBar />
            <Scene key="FormHome" component={FormHome} hideNavBar initial />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
