import './Scss/Style.css'
import React, { useState } from 'react'

function LoginForm() {
    // Error Masseg
    const [FNBlankErroe, SetFNBlankErroe] = useState()
    const [PasswordBlankError, SetPasswordBlankError] = useState()



    // Form OnSubmite Validation Satrt
    const ValidationForm = (event) => {
        event.preventDefault();
        if (event.target.UserName.value == "") {
            SetFNBlankErroe("Enter Your Email & Phone Number")
        }
        if (event.target.Password.value == "") {
            SetPasswordBlankError("*Enter your Password")
        }
    }
    // Form OnSubmite Validation End 




    // Inipute Tage Onchange Validation Start
    const ValidationInputeText = (events) => {
        if (events.target.value == "") {
            SetFNBlankErroe("Enter Your Email & Phone Number")
        }
        else {
            SetFNBlankErroe('')
        }
    }
    const ValidationInputePassword = (event) => {
        if (event.target.value == "") {
            SetPasswordBlankError("*Enter your Password")
        }
        else {
            SetPasswordBlankError("")
        }
    }
    // Inipute Tage Onchange Validation End 




    return (
        <div className="container mt-4 maincontainer">

            <div className="main">
                <div className="title"><span>Login Form</span></div>
                <form  onSubmit={ValidationForm} >

                    <div className="form-group row">
                        <input type="text" id="UserName" onInput={ValidationInputeText} name="Swapnil Patel" placeholder="Email or Phone" />
                        <span style={{ color: "red" }}>{FNBlankErroe}</span>
                    </div>

                    <div className="form-group row">
                        <input type="password" id="Password" onChange={ValidationInputePassword} placeholder="Enter Your Password" />
                        <span style={{ color: "red" }}>{PasswordBlankError}</span>

                    </div>

                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>

                    <div className="signup-Link">New User  <a href="/signup">SignUp Now</a></div>

                </form>
            </div>
        </div>
    )
}
export default LoginForm;
