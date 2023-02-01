import React, { useState } from 'react'
import './Scss/SignUp.css'
 function SignupForm() {
    const[fnameBlankError,SetfnameBlankError]=useState();
    const[LNameBlankError,SetLNameBlankError]=useState();
    const[EmailBlankError,SetEmailBlankError]=useState();
    const[PhoneBlankError,SetPhoneBlankError]=useState();


    // On Submite Hedal Start
    const SubmiteHendler=(event)=>{
        event.preventDefault();
        console.log(event.Number)
        if(event.target.FName.value==""){
            SetfnameBlankError("*Enter Your First Name")
        }
        if(event.target.LName.value==""){
            SetLNameBlankError("*Enter Your Last Name")
        }
        if(event.target.Email.value==""){
            SetEmailBlankError("*Enter Your Email")
        }
        if(event.target.number.value==""){
            SetPhoneBlankError("*Enter Your Phone Number")
        }
    }
    // On Submite Hendal End

    // On Change fuction Start
    const fname=(event)=>{
    if(event.target.value==""){
        SetfnameBlankError("*Enter Your First Name")
    }
    else{
        SetfnameBlankError('')
    }
    }

    const Lname=(event)=>{
        if(event.target.value==""){
            SetLNameBlankError("*Enter Your Last Name")
        }
        else{
            SetLNameBlankError("")
        }
    }
    const Email=(event)=>{
        if(event.target.value==""){
            SetEmailBlankError("*Enter Your Email")
        }
        else{
            SetEmailBlankError("")
        }
    }
    const Phone=(event)=>{
        if(event.target.value==""){
            SetPhoneBlankError("*Enter Your Phone Number")
        }
        else{
            SetPhoneBlankError("")
        }
    }


    // On Canege Function End
  return (
    <div>
    <div className="container">
    <div className="main">
        <div className="title"><span>SignUp Form</span></div>
        <form onSubmit={SubmiteHendler}> 
            <div className="row">
                <input className="Inpute-Text" id="FName" type="text" onChange={fname} placeholder="Enter First Name"/>
                <span style={{ color: "red" }}>{fnameBlankError}</span>
            </div>
            <div className="row">
                <input className="Inpute-Text" id="LName" type="text" onChange={Lname}  placeholder="Enter Your Last Name"/>
                <span style={{ color: "red" }}>{LNameBlankError}</span>
            </div>
            <div className="row">
                <input className="Inpute-Text" id="Email" type="text" onChange={Email} placeholder="Email Addres"/>
                <span style={{ color: "red" }}>{EmailBlankError}</span>
            </div>
            <div className="row">
                <input className="Inpute-Text" id="number" type="tel"  onChange={Phone} placeholder="Enter Phon Number"/>
                <span style={{ color: "red" }}>{PhoneBlankError}</span>

            </div>
            <div className="row button">
                <input className="Inpute-Text" type="submit"  value="SignUp" />
            </div>
            <div  className="Login-Link">Have a Alredy Account  <a href="/">Login</a></div>
        </form>
    </div>
</div>
    </div>
  )
}

export default SignupForm;
