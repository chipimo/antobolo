import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";
import "./styles/bootstrap/all.min.css";
// import "./styles/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import "./styles/shards-dashboards.1.1.0.min.css";

const persistor = persistStore(configureStore);

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
