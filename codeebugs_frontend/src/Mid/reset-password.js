import axios from "axios";
import { toast } from "react-toastify";

const { Component } = require("react");

class ResetPassword extends Component {
     state = {
          otpCode: "",
          newPassword: "",
          confirmNewPassword: "",
          otpCodeError: "",
          newPasswordError: "",
          confirmNewPasswordError: ""
     }

     changeState = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     otpValidation() {
          //login email validation
          const regex = /^([0-9]{4})$/;
          if (regex.test(this.state.otpCode) === false) {
               return false;
          }
          return true;
     }

     newOTP = (e) => {
          e.preventDefault()
          window.location.href = "/forgot-password"
          
     }


     submit = (e) => {
          e.preventDefault()

          this.setState({
               otpCodeError: "",
               newPasswordError: "",
               confirmNewPasswordError: ""
          })

          let otpCodeError = "";
          let newPasswordError = "";
          let confirmNewPasswordError = "";

          //login form validation
          if (this.state.otpCode === "") {
               otpCodeError = "**Please enter OTP Code!";
          }

          else if (this.otpValidation() === false) {
               otpCodeError = "**Invalid OTP code!";
          }

          if (this.state.newPassword === "") {
               newPasswordError = "**Password field cannot be empty!";
          }

          else if (this.state.newPassword.length < 8 || this.state.newPassword.length > 20) {
               newPasswordError = "**Password must be at least 8 characters long!"
          }

          else if (this.state.confirmPassword === "") {
               confirmNewPasswordError = "**Password field cannot be empty!";
          }

          else if (!(this.state.newPassword === this.state.confirmNewPassword)) {
               newPasswordError = "**Passwords do not match!";
               confirmNewPasswordError = "**Passwords do not match!";
          }

          if (otpCodeError || newPasswordError || confirmNewPasswordError) {
               this.setState({
                    otpCodeError, newPasswordError, confirmNewPasswordError
               })
          }

          else {
               const data = {
                    otp: this.state.otpCode,
                    newPassword: this.state.newPassword
               }
               axios.put("https://codeebugs.herokuapp.com/reset-password", data)
               toast.success("Your password has been changed successfully!", {
                    position: toast.POSITION.TOP_CENTER})
               setTimeout(() => {
                    window.location.href = "/login"
                 }, 2000);
               
          }

     }

     render() {
          return (
               <>
               <div>
               <form className="mt-3">
                    <h1>Reset Password</h1>
                    <p>Please enter OTP Code and new password.</p>
                    <input className="ml-5 mr-5" type="text" name="otpCode" placeholder="OTP Code" value={this.state.otpCode} onChange={this.changeState} />
                    <div className="mb-1" style={{ color: "red", fontSize: "small" }}>{this.state.otpCodeError}</div>
                    <input className="ml-5 mr-5" type="password" name="newPassword" placeholder="Password" value={this.state.newPassword} onChange={this.changeState} />
                    <div className="mb-1" style={{ color: "red", fontSize: "small" }}>{this.state.newPasswordError}</div>
                    <input className="ml-5 mr-5" type="password" name="confirmNewPassword" placeholder="Confirm Password" value={this.state.confirmNewPassword} onChange={this.changeState} />
                    <div className="mb-1" style={{ color: "red", fontSize: "small" }}>{this.state.confirmNewPasswordError}</div>
                    <button className="mb-2" onClick={this.submit}>Submit</button>
                    <button className="mb-5" onClick={this.newOTP}>Send New OTP</button>
               </form>
               </div>
               
</>
          )
     }
}

export default ResetPassword;