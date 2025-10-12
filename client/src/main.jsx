// client/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import Bootstrap's CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps with development by highlighting potential problems
  <React.StrictMode>
    <App />
  </React.StrictMode>
);