import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import { UserContextProvider } from './context/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserContextProvider>
        <App />
    </UserContextProvider>
  </Router>
)
