import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './view/index'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route path="/shop" component={ HomePage }/>
      <Route path="/shop/:catagory" component={ HomePage }/>
    </Switch>
  </BrowserRouter>
)


export default App;
