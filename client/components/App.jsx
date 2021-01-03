import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

import Homepage from './Homepage'
import Course from './Course'
import About from './About'
import Contact from './Contact'
import LogIn from './Authentication/LogIn'
import Register from './Authentication/Register'

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <div className="logo"></div>
          <NavLink to="/homepage">Homepage</NavLink>
          <NavLink to="/course">Course</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </nav>
        <main>
          <Route path="/homepage" component={Homepage} />
          <Route path="/course" component={Course} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
        </main>
      </Router>
    </>
  )
}

export default App
