import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { FuseAnimate, FuseAnimateGroup } from "../../@fuse";
import { Button, Icon } from 'antd';


const SignUp = () => {
  return (
  <div style={{ paddingTop:50, backgroundColor:"#ebebeb", height:"92vh"}}>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <MDBCard>
            <MDBCardBody>
          <form>
            <FuseAnimateGroup
                    enter={{
                      animation: "transition.slideUpBigIn"
                    }}
                   
                    duration={4000}
                  >
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
            
             <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  User name 
                </label>
                
              <input
                  type="Your name "
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
            <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Email address 
                </label>
                
              <input
                  type="text"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  New password
                </label>
                
              <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Confirm password
                </label>
                
              <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
            </div>
            <div className="text-center">
              <MDBBtn color="primary" className ="btn btn-outline-purple">Register  <MDBIcon far icon="paper-plane" className="ml-2" /></MDBBtn>
            </div>
            
            <br/>
            <div className="text-center">
          <Button type="primary" shape="round" icon="facebook" size="large">
          Login via Facebook 
        </Button>
          </div>
          
            </FuseAnimateGroup>
          </form>
          
         </MDBCardBody>
         </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default SignUp;
