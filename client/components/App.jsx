import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

import Homepage from './Homepage'
import Course from './Course'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <NavLink to="/homepage">Homepage</NavLink>
          <NavLink to="/course">Course</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <main>
          <Route path="/homepage" component={Homepage} />
          <Route path="/course" component={Course} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
      </Router>
    </>
  )
}

export default App
