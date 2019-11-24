import React, { useState } from "react";
import Cards from "../../components/Cards";
import { Carousel, Avatar } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer/Footer";

var settings = {
  speed: 1000
};

const HomeLayout = props => {
  const history = useHistory();

  return (
    <div
      style={{
        paddingTop: 70,
        width: "100%",
        backgroundColor: "#e7e7e7"
      }}
    >
      <div>
        <div style={{ margin: "auto", width: "91%" }}>
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                borderRadius: 5,
                padding: 10,
                marginBottom: 5
              }}
            >
              <div style={{ display: "flex" }}>
                <Avatar
                  shape="square"
                  size={45}
                  src="https://res.cloudinary.com/chawanangwa/image/upload/v1568776013/LOGO_eea3mz.png"
                />
                <div>
                  <h6 style={{ color: "green" }}> Join Antobolo </h6>
                  <p style={{ fontSize: 10, marginTop: -10, marginLeft: 5 }}>
                    The best files at hand
                  </p>
                </div>
              </div>
              <div>
                <Button
                  type="danger"
                  shape="round"
                  icon="user-add"
                  onClick={() => history.push("/signup")}
                >
                  SignUp Now
                </Button>
                <div>
                  <Button type="link" onClick={() => history.push("/login")}>
                    Login Into Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Carousel autoplay {...settings}>
            <div>
              <div
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  height: 100,
                  padding: 6
                }}
              >
                <h3 style={{ color: "green" }}> Welcome to Antobolo </h3>
                <p>
                  Download the best Books, Assignments, PastPapers, Newspapers
                  and do more
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  height: 100,
                  padding: 6
                }}
              >
                <h3 style={{ color: "green" }}> Purchasing Power </h3>
                <p>
                  Used books are often treasures that are out-of-print or rare.
                  With Wish Lists you can choose to be notified the instant we
                  find a copy.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  height: 100,
                  padding: 6
                }}
              >
                <h3 style={{ color: "green" }}> Selection</h3>
                <p>
                  We have more than 13 million titles to choose from, from the
                  earliest board books to the all-time classics of literature.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div style={{ marginTop: 15, width: "95%", margin: "auto" }}>
          <Cards type="card" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
