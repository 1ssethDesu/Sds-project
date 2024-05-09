import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="942340641071-nrq6r30ri68ch9rrs699k9lb1fu3ds4p.apps.googleusercontent.com" />
    <App />
  </React.StrictMode>
);



