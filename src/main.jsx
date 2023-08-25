import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StyleProvider } from '@ant-design/cssinjs';
import {store,persistor} from "@/redux/index"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StyleProvider hashPriority="high">
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
       
      </Provider>
    </BrowserRouter>
    </StyleProvider>
  </React.StrictMode>
)
