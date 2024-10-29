import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';
import { SignUp } from '../screens/SignUp';
import NewDetail from '../screens/NewDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/DashBoard';
import Profile from '../screens/Profile';
import News from '../screens/News';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'}
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="user-alt"
              size={24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  // Example header config
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="NewDetail" component={NewDetail} />
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{ headerShown: false }}  // Hides the header for TabNavigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigate;
