import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import MainPage from "./pages/MainPage"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container">
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={Profile} path="/profile" exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
