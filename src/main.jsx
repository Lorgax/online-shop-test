import React from 'react'
import ReactDOM from 'react-dom/client'
import { OnlineShop } from "./OnlineShop";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <OnlineShop />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
