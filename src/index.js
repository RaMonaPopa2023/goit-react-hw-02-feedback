import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import FeedbackWidget from 'components/FeedbackWidget';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <FeedbackWidget />
  </React.StrictMode>
);
