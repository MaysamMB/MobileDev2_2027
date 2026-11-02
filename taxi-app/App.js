
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './screens/about.screen.jsx';
import MyAccount from './screens/my-account.screen.jsx';
import HomeScreen from './screens/home.screen.jsx';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { StyleSheet, Button, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#6D3D59', margin: 10}}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center', lineHeight: 50}}>M</Text>
      </View>
      <DrawerItemList {...props} />

      <View>
        <Button title="Log Out" />
      </View>
      <DrawerItem
        label="Thanks for using Taxi App"
      />
      <DrawerItem label="Help" />
    </DrawerContentScrollView>
  );
}

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

    }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
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