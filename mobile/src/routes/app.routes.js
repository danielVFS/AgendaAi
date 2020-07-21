import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SelectProvider from '../pages/New/SelectProvider';
import SelectDateTime from '../pages/New/SelectDateTime';
import Confirm from '../pages/New/Confirm';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerTintColor: '#FFF',
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Agendamentos');
              }}
            >
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
          headerTintColor: '#FFF',
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}
            >
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirme o prestador',
          headerTintColor: '#FFF',
          headerTransparent: true,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDateTime');
              }}
            >
              <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabsNabivator() {
  const icons = {
    Agendamentos: {
      name: 'event',
    },
    Agendar: {
      name: 'add-circle-outline',
    },
    Perfil: {
      name: 'person',
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />;
        },
        tabBarVisible: route.name !== 'Agendar',
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#990017',
          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
      }}
    >
      <Tabs.Screen name="Agendamentos" component={Dashboard} />
      <Tabs.Screen name="Agendar" component={StackNavigation} />
      <Tabs.Screen name="Perfil" component={Profile} />
    </Tabs.Navigator>
  );
}
