import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.css'
import App from 'components/App'
import { store } from 'redux/store'
// import { persistor } from 'redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <Provider store={store}>
          <BrowserRouter basename='/tea-shop'>
          <App />
          </BrowserRouter>
        </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>
);
