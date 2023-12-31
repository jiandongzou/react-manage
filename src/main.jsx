import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StyleProvider } from '@ant-design/cssinjs';
import {store,persistor} from "@/redux/index"
import { Provider } from "react-redux"
import { BrowserRouter,HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { setupProdMockServer } from '@/mock/_index';

//生产环境引入数据
if (import.meta.env.MODE === 'production') {
  setupProdMockServer();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StyleProvider hashPriority="high">
    <HashRouter>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
       
      </Provider>
    </HashRouter>
    </StyleProvider>
  </React.StrictMode>
)
