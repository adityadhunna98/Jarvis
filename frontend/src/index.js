// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(<App />, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();


// // import { createRoot } from 'react-dom/client';

// // third party
// import { BrowserRouter } from 'react-router-dom';
// // import { Provider } from 'react-redux';

// // project imports
// // import * as serviceWorker from 'serviceWorker';
// // import App from 'App';
// import { store } from 'store';

// // style + assets
// // import 'assets/scss/style.scss';
// // import config from './config';

// // ==============================|| REACT DOM RENDER  ||============================== //

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     // <Provider store={store}>
//         <BrowserRouter basename={config.basename}>
//             <App />
//         </BrowserRouter>
//     // </Provider>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root"),
// );
