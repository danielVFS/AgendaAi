import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../pages/Dashboard';

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
  const icons = {
    Dashboard: {
      name: 'home',
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131313',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#B5BEBF',
      }}
    >
      <Tabs.Screen name="Dashboard" component={Dashboard} />
    </Tabs.Navigator>
  );
}
