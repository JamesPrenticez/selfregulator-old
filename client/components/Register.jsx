  
import React from 'react'
import { connect } from 'react-redux'

function Register () {

const linkStyle = {
  textDecoration: 'underline',
  color: 'blue',
  cursor: 'pointer'
}


  return (
    <div className="mainContainer">
        <form className="registrationForm">
            <fieldset>
                <legend>Register an Account</legend>

                <label for='email'>Email:</label>
                <input type='text' role='email' name='email' placeholder='example@gmail.com' onChange={console.log()}></input>

                <label for='password'>Create Password:</label>
                <input type='text' role='password' name='password' placeholder='password' onChange={console.log()}></input>

                <label for='confirmPassword'>Confrim Password:</label>
                <input type='text' role='confirmPassword' name='confirmPassword' placeholder='confirm password' onChange={console.log()}></input>
                <br>
                </br>

                <input type="submit" value="Submit" onClick={console.log()}></input>
                <a style={linkStyle} role='login' onClick={() => console.log()}>Log In</a>
            </fieldset>
        </form>
    </div>
  )
}

export default connect()(Register)