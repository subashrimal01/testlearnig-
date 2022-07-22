import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Component } = require("react");


class ForgotPassword extends Component {
     state = {
          email: "",
          emailError: "",

     }

     changeState = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     emailValidation() {

          //login email validation
          const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
          if (regex.test(this.state.email) === false) {
               return false;
          }
          return true;
     }




     submit = (e) => {
          e.preventDefault()

          this.setState({
               emailError: ""
          })

          let emailError = "";


          if (this.state.email === "") {
               emailError = "**E-mail field cannot be empty!";
          }

          else if (this.emailValidation() === false) {
               emailError = "**Invalid e-mail address!";
          }


          if (emailError) {
               this.setState({
                    emailError
               })
          }

          else {
               const data = {
                    email: this.state.email
               }
               axios
                    .post("https://codeebugs.herokuapp.com/find-email", data)
                    .then((result) => {
                         if (result.data.success === true) {
                              toast.success("Please check your e-mail for OTP code!", {
                                   position: toast.POSITION.TOP_CENTER})
                              axios.post("https://codeebugs.herokuapp.com/forgot-password", data)
                              setTimeout(() => {
                                   window.location.href = "/reset-password"
                                }, 2000);
                         }
                    }).catch(function (error) {

                         if (error.response) {
                              toast.error("User not found!", {
                                   position: toast.POSITION.TOP_CENTER})
                              console.log(error.response.data);
                         }
                    });
          }

     }

     render() {
          return (
               <>
                    <form className="mt-3">
                         <h1>Forgot Password</h1>
                         <p>Please enter your e-mail id.</p>
                         <input className="ml-5 mr-5" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeState} />
                         <div className="mb-1" style={{ color: "red", fontSize: "small" }}>{this.state.emailError}</div>
                         <button className="mb-5" onClick={this.submit}>Submit</button>
                    </form>
               </>
          )
     }
}

export default ForgotPassword;