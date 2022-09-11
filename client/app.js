import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import './app.module.css'

const App = () => {
  return (
    <div className="classTime">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
