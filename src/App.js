import React, { useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Login, Home, Admin } from './routes'

const App = () => {
  useEffect(() => {
    window
      .fetch('http://localhost:8080/students', {
        headers: { Authorization: '1234' }
      })
      .then(res => res.text())
      .then(text => console.log(JSON.parse(text)))
  }, [])
  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/admin' exact>
          <Admin />
        </Route>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  )
}

export default App
