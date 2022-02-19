import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'
import store from './Store/Strore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     < ReduxProvider store={store}>
      <App />
     </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
