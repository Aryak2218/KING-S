import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import FormScreen from './src/screen/FormScreen';
import { Home2, Profile, Add } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tabs untuk navigasi utama
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarStyle: { paddingBottom: 5, height: 60 }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Home2 color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Add color={color} size={size} />,
          title: 'Detail'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Profile color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
};

// Stack Navigator utama (untuk form)
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: 'Tambah Produk' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
