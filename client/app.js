import React from 'react'

import {Navbar} from './components'
import Footer from './components/footer'
import Routes from './routes'
import './app.css'

const App = () => {
  return (
    <div className="classTime">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
