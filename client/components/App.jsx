import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams, Redirect } from "react-router-dom";

import Homepage from './Homepage'
import Course from './Course'
import About from './About'
import Contact from './Contact'
import Register from './Register'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
  }
  render() {
  return (
    <>
      <Router>
        <nav>
          <div className="logo"></div>
          <NavLink to="/homepage">Homepage</NavLink>
          {/* <NavLink to="/course/:user_id">Course</NavLink> */}
          <NavLink to="/course/1">Course</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
        <main>
          <Route path="/homepage" component={Homepage} />
          {/* <Route path="/course/:user_id" render={(matchProps) => <Course {...matchProps}{...this.props} />} /> */}
          <Route path="/course/1" render={(matchProps) => <Course {...matchProps}{...this.props} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
        </main>
      </Router>
    </>


  )
  }
}

function mapStateToProps(state) {
  const { tasks } = state
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
