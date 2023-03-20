import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../screen/Detail';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Navbar from './Navbar';

const Stack = createNativeStackNavigator();

class MainNavigation extends React.PureComponent {
  state = {};
  render() {
    return (
      <Stack.Navigator initialRouteName="Home" headerMode={'screen'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
