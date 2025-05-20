// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "../StyleSheet/index.css";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";  // Import PersistGate here

// import store, { persistor } from "../Store/index.js";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../StyleSheet/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../Store/index.js";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
