import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Photos from './components/Photos'
import Cart from './components/Cart'
 
const App = () => {    
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path="/">
                  <Photos />
              </Route>
              
              <Route path="/cart">
                  <Cart />
              </Route>
          </Switch>
      </div>
  )
}

export default App