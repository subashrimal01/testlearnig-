import React, { Component } from 'react';
import Receipt from './paymentReceipt';
import {toast} from 'react-toastify';
import axios from 'axios';

class CoursePayment extends Component {
  state = {
    title: 'python',
    price: 1000,
    eSewaNumber: "",
    eSewaPassword: "",
    eSewaError : "",
    eSewaPasswordError: "",
    cardNumber: "",
    cardExpiryDate: "",
    cardCVC: "",
    cardNumberError: "",
    cardExpiryDateError: "",
    cardCVCError: "",
    postSubmitted: false
  }

  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  validateESewaNumber=(e)=>{
    const regex = /^\+?(?:(?:(?:98|97)-?\d{8}))$$/

    if (regex.test(this.state.eSewaNumber) === false) {
    return false;
    }
   return true;
  }

  validateCard = (e)=> {
    //validates master card and visa card number
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

    if(regex.test(this.state.cardNumber) === false){
      return false
    }
    return true;

  }

  validateCardExpiryDate = (e) => {

    //validates expiry date from 2022-2029
    const regex = /^((0[1-9])|(1[0-2]))\/((2021)|(20[1-2][0-9]))$/

    if(regex.test(this.state.cardExpiryDate) === false){
      return false;
    }
    return true;
  }

  validateCardCVC= (e)=>{

    //validates three or four numbered CVC/CVV
    const regex = /^[0-9]{3,4}$/

    if(regex.test(this.state.cardCVC) === false){
      return false;
    }
    return true;
  }

  submitESewa = (e) => {
    e.preventDefault()

    this.setState({
      eSewaError : "",
      eSewaPasswordError : ""
    })

    let eSewaError = "";
    let eSewaPasswordError = "";
    
    if(this.state.eSewaNumber === ""){
      eSewaError = "**Please enter you eSewa ID!"
    }

    else if (this.validateESewaNumber() === false) {
      eSewaError = "Invalid eSewa Number!"
    }

    if (this.state.eSewaPassword === ""){
      eSewaPasswordError = "**Please enter your eSewa password!"
    }

    if (eSewaError || eSewaPasswordError) {
      this.setState({ eSewaError, eSewaPasswordError })
      return false;
    }

    else{
      if (localStorage.getItem("courseID") === null){
        window.location.href = "/courses"
      }else{
        const courseID = localStorage.getItem("courseID")
      const data = {
        userID : localStorage.getItem("userID"),
        enrolledCourses : [{
          courseID
        }]
      }
      
      axios.put("https://codeebugs.herokuapp.com/enrollcourse", data)
      .then((result) => {
       
        toast.success("Payment successful!", {
          position: toast.POSITION.TOP_CENTER})
        window.location.href = "/courses"
        localStorage.removeItem("courseID")
    })
    .catch()
  }
     
        
    }

    return true;


    // this.setState({
    //   postSubmitted: true
    // });

  }

  submitCard = (e) =>{
    e.preventDefault()

    this.setState({
      cardNumberError: "",
      cardExpiryDateError: "",
      cardCVCError: "",
    })

    let cardNumberError = "";
    let cardExpiryDateError = "";
    let cardCVCError = "";

    if(this.state.cardNumber === ""){
      cardNumberError = "**Please enter your card number!"
    }

    else if(this.validateCard() === false){
      cardNumberError = "**Please enter a valid card number!"
    }

    if(this.state.cardExpiryDate === ""){
      cardExpiryDateError = "**Please enter a date!"
    }
    
    else if(this.validateCardExpiryDate() === false){
      cardExpiryDateError = "**Please enter valid date!"
    }

    if(this.state.cardCVC === ""){
      cardCVCError = "**Please enter your card's CVC/CVV!"
    }

    else if(this.validateCardCVC() === false){
      cardCVCError = "**Please enter valid CVC/CVV!"
    }

    if(cardNumberError || cardExpiryDateError || cardCVCError){
      this.setState({
        cardNumberError, cardExpiryDateError, cardCVCError
      })
      return false
    }

    else {
      const data = {
        userID : localStorage.getItem("userID"),
        courseID : localStorage.getItem("courseID")
      }
      axios.put("https://codeebugs.herokuapp.com/enrollcourse", data)
      .then((result) => {
        localStorage.removeItem("courseID")
        toast.success("Payment successful!", {
          position: toast.POSITION.TOP_CENTER})
    })
    .catch()
     

    }
    return true;
  }

  render() {
    return (
      <>
        {!this.state.postSubmitted ?
          (<div className="container d-flex justify-content-center mt-5 mb-5">
            <div className="col-md-6"> <h3>Payment Method</h3>
              <div className="card">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header p-0" id="headingTwo">
                      <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="d-flex align-items-center justify-content-between"> <span>e-Sewa</span> <img src="assets/img/esewa.png" width={30} /> </div>
                      </button> </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body"> <input type="text" className="form-control" name="eSewaNumber" placeholder="E-sewa ID" value={this.state.eSewaNumber} onChange={this.changeState}/>
                      <div style={{ color: "red", fontSize: "small" }}>{this.state.eSewaError}</div>
                        <input type="password" className="form-control" name="eSewaPassword" placeholder="Password" value={this.state.eSewaPassword} onChange={this.changeState}/>
                        <div style={{ color: "red", fontSize: "small" }}>{this.state.eSewaPasswordError}</div>
                        <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.submitESewa} >Pay Now</button></div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-0">
                      <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="d-flex align-items-center justify-content-between"> <span>Card Payment</span>
                          <div className="icons"> <img src="https://i.imgur.com/2ISgYja.png" width={30} /> <img src="https://i.imgur.com/W1vtnOV.png" width={30} />  </div>
                        </div>
                      </button> </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body payment-card-body"> <span className="font-weight-normal card-text">Card Number</span>
                        <div className="input"> <i className="fa fa-credit-card" /> <input type="text" className="form-control" name="cardNumber" placeholder="0000 0000 0000 0000" value={this.state.cardNumber}onChange={this.changeState} /> </div>
                        <div style={{ color: "red", fontSize: "small" }}>{this.state.cardNumberError}</div>
                        
                        <div className="row mt-3 mb-3">
                          <div className="col-md-6"> <span className="font-weight-normal card-text">Expiry Date</span>
                            <div className="input"> <i className="fa fa-calendar" /> <input type="text" className="form-control" name='cardExpiryDate' placeholder="MM/YYYY" value={this.state.cardExpiryDate} onChange={this.changeState} /> 
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.cardExpiryDateError}</div></div>
                          </div>
                          <div className="col-md-6"> <span className="font-weight-normal card-text">CVC/CVV</span>
                            <div className="input"> <i className="fa fa-lock" /> <input type="text" className="form-control" name='cardCVC' placeholder={0.00} value={this.cardCVC}onChange={this.changeState}/>
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.cardCVCError}</div> </div>
                          </div>
                        </div> <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.submitCard} >Pay Now</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"> <h3>Payment Details</h3>
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <div className="d-flex flex-column"> <span> Course Title <i className="fa fa-caret-down" /></span> </div>
                  <div className="mt-1"> <sup className="super-price">{this.state.title}</sup></div>
                </div>
                <hr className="mt-0 line" />
                <div className="p-3">
                  <div className="d-flex justify-content-between mb-2"> <span>Course Price</span> <span>Rs.{this.state.price}</span> </div>
                </div>
                <hr className="mt-0 line" />
                <div className="p-3 d-flex justify-content-between">
                  <div className="d-flex flex-column"> <span>Total (Rupees)</span>  </div> <span>Rs.{this.state.price}</span>
                </div>
                <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={this.Submit} >Pay Now</button>
                </div>
              </div>
            </div>
          </div>) : (
            <Receipt title={this.state.title} price={this.state.price} />
          )
        }
      </>
    );
  }
}

export default CoursePayment;