import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


/* It's recommanded to disable React Strict Mode, because it do not
   play well with websocket, which is needed to use Chat Apps  */
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
