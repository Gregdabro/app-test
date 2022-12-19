import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './app/App'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
)

reportWebVitals()
