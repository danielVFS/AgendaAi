import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import './src/config/Reactotron';
import Routes from './src/routes';
import {store,persistor} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor="#240b36" barStyle="light-content" />
          <Routes />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
