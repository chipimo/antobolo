import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { FuseAnimate, FuseAnimateGroup } from "../../@fuse";
import { Button, Icon } from 'antd';

const Login = () => {
  return (
  <div style={{paddingTop:90, height:"92vh", backgroundColor:"#ebebeb"}}>
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
                   
                    duration={2300}
                  >
                <p className="h4 text-center py-4">Login Into Account </p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  User name 
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Login 
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
                
                
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

export default Login;
