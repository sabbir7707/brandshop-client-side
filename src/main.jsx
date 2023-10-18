import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Rautes.jsx'
import AuthProvider from './Authprovider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
