import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RequestScreen from './screens/request.screen.jsx';
import DrivingScreen from './screens/driving.screen.jsx';
import AboutScreen from './screens/about.screen.jsx';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
        // screenOptions={({route})={

        //   route.name === 'request'
        // }}
        >
          <Tab.Screen
            name="request"
            component={RequestScreen}
            options={{
              title: 'Request a Taxi',
              headerShown: false,
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-card" size={size} color={color} />
            }}
          />
          <Tab.Screen
            name="driving"
            component={DrivingScreen}
            options={{
              title: 'Driving Map',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="navigation-variant" size={size} color={color} />
            }}
          />
          <Tab.Screen
            name="about"
            component={AboutScreen}
            options={{ title: 'About App' }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
