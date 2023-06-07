import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = RouterProvider([])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
     <App /> 
    </ThemeProvider>
  </React.StrictMode>,
)
