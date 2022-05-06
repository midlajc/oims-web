import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from './Root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import Routes from './Routes'
import SponsorRegistration from './Components/App/Public/SponsorRegistration'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register()