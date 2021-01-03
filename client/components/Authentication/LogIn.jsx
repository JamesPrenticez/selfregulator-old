import React, { useState } from 'react'
import { connect } from 'react-redux'
import { isAuthenticated, signIn } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../../config'
import { IfNotAuthenticated } from './Authenticated'

import { getUserInfo } from '../../api'
import { changePage, addUserInfo } from '../../actions'

const linkStyle = {
  textDecoration: 'underline',
  color: 'blue',
  cursor: 'pointer'
}

const LogIn = ({ dispatch }) => {
  const [user] = useState({
    username: '',
    password: ''
  })

  const emailHandler = (event) => {
    event.preventDefault()
    user.email = event.target.value
  }

  const passwordHandler = (event) => {
    event.preventDefault()
    user.password = event.target.value
  }

  const handleClick = event => {
    event.preventDefault()
    const { email, password } = user

    signIn({ username: email, password }, { baseUrl })
      .then((token) => {
        console.log(token)
        if (isAuthenticated()) {
          dispatch(changePage('Home'))
          return getUserInfo(email)
        }
      })
      .then(res => {
        dispatch(addUserInfo(res))
      })
      .catch(err => alert(err.message + ': Incorrect email or password, please try again'))
  }

  return (
    <>
      <IfNotAuthenticated>
        <div className="LogIn">
          <input type="email" id='email' name='email' placeholder='Email address' onChange={emailHandler}></input>
          <input type="password" id='password' name='password' placeholder="password" onChange={passwordHandler} ></input>
          <button type='button' className="Sign-in" onClick={handleClick}>Sign-In</button>
          <br></br>
          <a role='button' className="Register" style={linkStyle} onClick={() => dispatch(changePage('Register'))}>Register</a>
          <a className="Forget-Password" style={linkStyle}>Forgot Password</a>
        </div>
      </IfNotAuthenticated>
    </>
  )
}
function mapStateToProps (state) {
  return {
    userInfo: state.addUserInfoReducer
  }
}
export default connect(mapStateToProps)(LogIn)