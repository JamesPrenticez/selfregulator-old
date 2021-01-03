import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUserInfo, changePage } from '../../actions'
import { sendRegistrationEmail, getUserInfo } from '../../api'
import { register, isAuthenticated } from '../../../node_modules/authenticare/client'
import { baseApiUrl as baseUrl } from '../../config'

const linkStyle = {
  textDecoration: 'underline',
  color: 'blue',
  cursor: 'pointer'
}

function Register ({ dispatch }) {
  const [newUser] = useState({})
  const [confirmPassword, setConfirmPassword] = useState('')

  const emailHandler = event => {
    event.preventDefault()
    newUser.email = event.target.value
  }

  const passwordHandler = event => {
    event.preventDefault()
    newUser.password = event.target.value
  }

  const confirmPasswordHandler = event => {
    event.preventDefault()
    setConfirmPassword(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const { email, password } = newUser

    if (password === confirmPassword) {
      register({ username: email, password }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            sendRegistrationEmail(email)
            alert('check your inbox')
            dispatch(changePage('Home'))
            return getUserInfo(email)
          } else {
            alert('Nope')
          }
        })
        .then(res => {
          dispatch(addUserInfo(res))
        })
        .catch(err => alert(err.message + ': Email address already taken'))
    } else alert('passwords do not match')
  }

  return (
    <div className="mainContainer">
        <form className="registrationForm">
            <fieldset>
                <legend>Register an Account</legend>

                <label for='email'>Email:</label>
                <input type='text' role='email' name='email' placeholder='example@gmail.com' onChange={emailHandler}></input>

                <label for='password'>Create Password:</label>
                <input type='text' role='password' name='password' placeholder='password' onChange={passwordHandler}></input>

                <label for='confirmPassword'>Confrim Password:</label>
                <input type='text' role='confirmPassword' name='confirmPassword' placeholder='confirm password' onChange={confirmPasswordHandler}></input>
                <br>
                </br>

                <input type="submit" value="Submit" onClick={submitHandler}></input>
                <a style={linkStyle} role='login' onClick={() => dispatch(changePage('LogIn'))}>Log In</a>
            </fieldset>
        </form>
    </div>
  )
}

export default connect()(Register)