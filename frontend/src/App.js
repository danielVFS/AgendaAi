import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/Reactotron';

import GlobalStyles from './styles/global';
import Routes from './routes';
import { store, persistor } from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
