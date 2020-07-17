import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
  const icons = {
    Agendamentos: {
      name: 'event',
    },
    Perfil: {
      name: 'person',
    }
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
          backgroundColor: '#990017',
          // Remove border top on both android & ios
          borderTopWidth: 0,
          borderTopColor: "transparent",
        },
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255,255,255,0.6)',

      }}
    >
      <Tabs.Screen name="Agendamentos" component={Dashboard}  />
      <Tabs.Screen name="Perfil" component={Profile} />
    </Tabs.Navigator>
  );
}
