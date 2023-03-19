import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './components/Navbar';
import Detail from './screen/Detail';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerTransparent:true, header: ({navigation}) => <Navbar navigation={navigation} main={true} /> }}  />
        <Stack.Screen name="Detail" component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} main={false} />}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;