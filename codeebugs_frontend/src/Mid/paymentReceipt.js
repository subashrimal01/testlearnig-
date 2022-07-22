import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Receipt = (props) => {
    return(
        <div className="container justify-content-center">
  <div className="container justify-content-center" style={{width: 800, height: 700}} ref={ref} >
    <div className="row justify-content-center">
      <div className="col-md-6 col-md-offset-3 body-main justify-content-center">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4"> <img className="img" src="logo.png" /> </div>
            <h2>Invoice</h2>
          </div> <br />
          
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h5>Course Title</h5>
                  </th>
                  <th>
                    <h5>Amount</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-md-9">{props.title}</td>
                  <td className="col-md-3"><i className="fas fa-rupee-sign" area-hidden="true" />{props.price}</td>
                </tr>
                <tr>
                  <td className="text-right">
                    <p> <strong>Total Amount: </strong> </p>
                    <p> <strong>Discount: </strong> </p>
                    <p> <strong>Payable Amount: </strong> </p>
                  </td>
                  <td>
                    <p> <strong><i className="fas fa-rupee-sign" area-hidden="true" />{props.price}</strong> </p>
                    <p> <strong><i className="fas fa-rupee-sign" area-hidden="true" />0</strong> </p>
                    <p> <strong><i className="fas fa-rupee-sign" area-hidden="true" />{props.price}</strong> </p>
                  </td>
                </tr>
                <tr style={{color: '#F81D2D'}}>
                  <td className="text-right">
                    <h4><strong>Total:</strong></h4>
                  </td>
                  <td className="text-left">
                    <h4><strong><i className="fas fa-rupee-sign" area-hidden="true" />{props.price}</strong></h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="col-md-12">
              <p><b>Date :</b> 6 June 2019</p> <br />
              <p><b>Signature</b></p>
            </div>
          </div>
        </div>
      </div><br/>
    </div>
    
  </div>
       
  <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button className='btn-pdf' onClick={toPdf}>Capture as PDF</button>}
        </Pdf>
</div>
    )
}

export default Receipt;