import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AlertState from './context/alert/AlertState';
import NoteState from './context/notes/NoteState';
import ProgressState from './context/progress/ProgressState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteState>
      <ProgressState>
        <AlertState>
          <App />
        </AlertState>
      </ProgressState>
    </NoteState>
  </React.StrictMode>
);
