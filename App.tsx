import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './components/MainNavigation';
import Navbar from './components/Navbar';
import Detail from './screen/Detail';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
};

export default App;