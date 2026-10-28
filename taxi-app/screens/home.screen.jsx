import RequestScreen from "./request.screen";
import DrivingScreen from "./driving.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";

import { TouchableOpacity, View, StyleSheet } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MyAccount from "./my-account.screen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'shift',
          tabBarActiveTintColor: '#9D5273',
          tabBarInactiveTintColor: '#8B8589',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E8D5DF',
            borderTopWidth: 1,
            height: 65,
            paddingBottom: 8,
            paddingTop: 6,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="request"
          component={RequestScreen}
          options={{
            title: "Request a Taxi",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="taxi"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="driving"
          component={DrivingScreen}
          options={{
            title: "Driving Map",
            tabBarIcon: ({ color, size }) => (
              <Feather name="map-pin" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="about"
          component={MyAccount}
          options={{
            title: "My Account",
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="account" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      <TouchableOpacity
        style={[styles.menuButton]}
        onPress={() =>
          navigation.dispatch(DrawerActions.openDrawer())
        }
      >
        <MaterialCommunityIcons
          name="menu"
          size={26}
          color="#6D3D59"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 menuButton: {
  position: 'absolute',
  top: 35,
  left: 20,
  width: 46,
  height: 46,
  borderRadius: 23,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 4,
  zIndex: 10,
  borderWidth: 1,
  borderColor: '#E8D5DF',
},
});

export default HomeScreen;
