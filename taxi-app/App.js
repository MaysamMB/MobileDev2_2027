
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './screens/about.screen.jsx';
import MyAccount from './screens/my-account.screen.jsx';
import HomeScreen from './screens/home.screen.jsx';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerType: 'front',
      drawerStyle:[styles.darwer_style],
      drawerActiveTintColor: '#815d70',
      drawerInactiveTintColor: '#959393',
      drawerLabelStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#493342'
      },
      drawerItemStyle: {
        borderRadius: 10,
        marginHorizontal: 10,
      },

    }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={MyAccount} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    
    <NavigationContainer>
    
        <MainDrawer />
    
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  darwer_style: {
    backgroundColor: '#F8F5F2',
  }

});