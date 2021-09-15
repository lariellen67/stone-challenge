import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { Toast } from './components/Toast';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import history from './routes/history';
import { persistor, store } from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Toast />
        <Routes />
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
