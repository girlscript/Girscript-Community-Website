import React from "react"
import "./Login.css"
import Navbar from "../Navbar/Navbarr"

function Login(){
   
    return(
       <div>
            <Navbar />
        <div className="login" >
            
           <center>
           <form className="login-form">
             <div className="form-title" >
        Log <span style={{color:"white"}}>In</span>
                </div>
                <label className="fill-name">Email</label><br></br>
                <input type="email" placeholder="Enter Email...."></input><br></br><br></br><br></br>
                <label className="fill-name">Password</label><br></br>
                <input type="password" placeholder="Enter password..."></input><br></br>

                <div className="forget-pas">
                    Forget Password?
                </div>
                <button style={{backgroundColor:"orangered"}} className="buttons">SUBMIT</button><br></br>
                <button style={{backgroundColor:"gray"}} className="buttons">NEW USER?</button>

            </form>
           </center>
            
        </div>
       </div>
    );
}
export default Login

