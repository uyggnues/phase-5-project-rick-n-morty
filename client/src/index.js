import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Context/UserContext'
import { CharacterProvider } from './Context/CharacterContext';
import { TeamProvider } from './Context/TeamContext';
import { EpisodeProvider } from './Context/EpisodeContext';
import { ErrorProvider } from './Context/ErrorContext';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ErrorProvider>
    <UserProvider>
      <CharacterProvider>
        <TeamProvider>
          <EpisodeProvider>
            <Router>
              <App />
            </Router>
          </EpisodeProvider>
        </TeamProvider>
      </CharacterProvider>
    </UserProvider>
  </ErrorProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
