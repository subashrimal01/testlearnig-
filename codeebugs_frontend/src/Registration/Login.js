
import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";

class Login extends Component {

  state = {
    loginemail: '',
    loginpassword: '',
    full_name: "",
    email: "",
    age: "",
    password: "",
    confirm_password: "",
    loginEmailError: "",
    loginPasswordError: "",
    full_nameError: "",
    emailError: "",
    ageError: "",
    passwordError: "",
    confirmPasswordError: "",
    invalidLoginError: ""
  }


  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  emailValidation() {
    // registration email validation
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (regex.test(this.state.email) === false) {
      return false;
    }
    return true;
  }

  loginEmailValidation() {

    //login email validation
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (regex.test(this.state.loginemail) === false) {
      return false;
    }
    return true;
  }

  nameValidation() {

    //full name validation
    //checks whether the full name has number or not
    if (!this.state.full_name.match(/^[a-zA-Z\s]+$/)) {
      return false;
    }
    return true;
  }

  login = (e) => {
    e.preventDefault()

    this.setState({
      loginEmailError: "",
      loginPasswordError: "",
      invalidLoginError: ""
    })

    let loginEmailError = "";
    let loginPasswordError = "";
    let invalidLoginError = "";

    //login form validation
    if (this.state.loginemail === "") {
      loginEmailError = "**E-mail field cannot be empty!";
    }

    else if (this.loginEmailValidation() === false) {
      loginEmailError = "**Invalid e-mail address!";
    }

    if (this.state.loginpassword === "") {
      loginPasswordError = "**Password field cannot be empty"
    }

    if (loginEmailError || loginPasswordError) {
      this.setState({ loginEmailError, loginPasswordError })
      return false;
    }

    else {

      // login function
      const data = {
        email: this.state.loginemail,
        password: this.state.loginpassword
      }
      axios.post('http://localhost:5000/user/login', data)
        .then((res) => {
          toast.success("Logged in successfully!", {
            position: toast.POSITION.TOP_CENTER
          })

          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userID', res.data.userID);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          setTimeout(() => {
            window.location.href = "/"
          }, 2000);

        })
        .catch((err) => {
          invalidLoginError = "**Invalid credentials!";
          if (invalidLoginError) {
            this.setState({ invalidLoginError })
            return false;
          }
        })

    }

    return true;
  }

  register = (e) => {
    e.preventDefault()

    this.setState({
      full_nameError: "",
      emailError: "",
      ageError: "",
      passwordError: "",
    })

    let full_nameError = "";
    let emailError = "";
    let ageError = "";
    let passwordError = "";
    let confirmPasswordError = "";


    //registration form validation
    if (this.state.full_name === "") {
      full_nameError = "**Fullname cannot be empty!";
    }

    else if (this.nameValidation() === false) {
      full_nameError = "**Fullname must not contain number!";
    }

    if (this.state.email === "") {
      emailError = "**E-mail field cannot be empty!";
    }

    else if (this.emailValidation() === false) {
      emailError = "**Invalid e-mail address!";
    }

    if (this.state.age === "") {
      ageError = "**Age cannot be empty!";
    }

    else if (this.state.age < 5 || this.state.age > 13) {
      ageError = "**Age must be between 5 and 13!"
    }

    if (this.state.password === "") {
      passwordError = "**Password field cannot be empty!";
    }

    if (this.state.password.length < 8 || this.state.password.length > 20) {
      passwordError = "**Password must be at least 8 characters long!"
    }

    if (this.state.confirm_password === "") {
      confirmPasswordError = "**Password field cannot be empty!";
    }

    else if (!(this.state.password === this.state.confirm_password)) {
      passwordError = "**Passwords do not match!";
      confirmPasswordError = "**Passwords do not match!";
    }

    if (full_nameError || emailError || ageError || passwordError || confirmPasswordError) {
      this.setState({ full_nameError, emailError, ageError, passwordError, confirmPasswordError })
      return false;
    }

    else {

      //registration function
      if (this.state.password === this.state.confirm_password) {
        const data = {
          full_name: this.state.full_name,
          email: this.state.email,
          age: this.state.age,
          password: this.state.password
        }

        axios.post("http://localhost:5000/signup", data)
        toast.success("Registration successful!")
        setTimeout(() => {
          window.location.href = "/login"
        }, 2000);
      } else {
        toast.error("Something went wrong!")
      }
    }
    return true;
  }

  forgotPassword = (e) => {
    window.location.href = "/forgot-password"
  }


  render() {
    return (
      <div>
        <img className="customAnimationWelcome" src="welcome.gif" alt="image" />
        <img className="customAnimationKid" src="helloKid.gif" alt="image" />
        <img className="customAnimationLaptop" src="laptop.jpg" alt="image" />
        <section className="class-area2 bg-fdf6ed pt-100 pb-70">

          <div className="row">
            <div className="cont" id="container">
              <div className="form-container sign-up-container">
                <form action="post">
                  <h1>Create Account</h1>
                  <input type="text" name="full_name" placeholder="Full Name" value={this.state.full_name} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.full_nameError}</div>
                  <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.emailError}</div>
                  <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.ageError}</div>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.passwordError}</div>
                  <input type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.confirmPasswordError}</div>
                  <button onClick={this.register} >Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="post">
                  <h1>Sign in</h1>
                  <input type="email" name="loginemail" value={this.state.loginemail} onChange={this.changeState} placeholder="Email" />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.loginEmailError}</div>
                  <input type="password" name="loginpassword" value={this.state.loginpassword} onChange={this.changeState} placeholder="Password" />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.loginPasswordError}</div>
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.invalidLoginError}</div>
                  <a onClick={this.forgotPassword}>Forgot your password?</a>
                  <button type="submit" onClick={this.login}>Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>



    )
  }
}

export default Login;