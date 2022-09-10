import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import styles from './app.module.css'

const App = () => {
  return (
    <div className={styles.classTime}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
