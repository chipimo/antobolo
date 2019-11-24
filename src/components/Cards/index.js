import React, { Component, useState } from "react";
import { connect } from "react-redux";
import TopBanner from "./TopBanner";
import Typography from "@material-ui/core/Typography";
import CardView from "./CardView";
import { FuseAnimate, FuseAnimateGroup } from "../../@fuse";
import { withStyles } from "@material-ui/styles";
import { Divider, Header, Icon } from "semantic-ui-react";

const styles = theme => ({
  animation: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
});

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          type: "Books",
          cards: [
            {
              headerTitle: {
                top: "Bestselling books",
                min: "Top selling books this year"
              },
              cardItems: [
                {
                  type: "book",
                  img:
                    "https://images-platform.99static.com/LwGm06M3IcJSqSnvVJ_xZrLtJho=/959x0:2000x1041/fit-in/900x675/99designs-contests-attachments/66/66560/attachment_66560368",
                  title: "The best man in math",
                  author: "Melvin Chipimo",
                  price: null,
                  about: (
                    <div>
                      You’re editing a file in a project you don’t have write
                      access to. Submitting a change to this file will write it
                      to a new branch in your fork chipimo/Semantic-UI-React, so
                      you can send a pull request.
                      <br />
                      <br />
                      You’re editing a file in a project you don’t have write
                      access to. Submitting a change to this file will write it
                      to a new branch in your fork chipimo/Semantic-UI-React, so
                      you can send a pull request.
                    </div>
                  ),
                  reviews: {
                    num: 32,
                    comments: [{}]
                  },
                  rating: 3,
                  summary: ""
                },
                {
                  type: "book",
                  img:
                    "https://www.ons.org/sites/default/files/2017/10/20/INPU0605.jpg",
                  title: "Nursing Manament",
                  author: "Melvin Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 5,
                    comments: [{}]
                  },
                  rating: 2,
                  summary: ""
                }
              ]
            },
            {
              headerTitle: {
                top: "Just Arrived",
                min: "These books have been uploaded today",
                type: "books"
              },
              cardItems: [
                {
                  type: "book",
                  img:
                    "https://images.tandf.co.uk/common/jackets/amazon/978081537/9780815371335.jpg",
                  title: "Computer and Cyber security",
                  author: "Melvin Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 2,
                    comments: [{}]
                  },
                  rating: 1,
                  summary: ""
                },
                {
                  type: "book",
                  img:
                    "https://damonza.com/wp-content/uploads/portfolio/fiction/World-Whisperer.jpg",
                  title: "World Whisper",
                  author: "Mulenga Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 0,
                    comments: [{}]
                  },
                  rating: 0,
                  summary: ""
                }
              ]
            }
          ]
        },
        {
          type: "Assignments",
          cards: [
            {
              headerTitle: {
                top: "Most Downloaded Assignments",
                min: "Top downloaded this month"
              },
              cardItems: [
                {
                  type: "book",
                  img:
                    "https://res.cloudinary.com/chawanangwa/image/upload/v1571129737/edexcel-maths-hight-tier-1mao2h-1-638_u9hkdv.jpg",
                  title: "Math 2014 End of Year Assignments ",
                  author: "Melvin Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 322,
                    comments: [{}]
                  },
                  rating: 4,
                  summary: ""
                },
                {
                  type: "book",
                  img:
                    "https://res.cloudinary.com/chawanangwa/image/upload/v1571129976/e710039cb661fd7b6063689b9c9c91c0_j9tzom.jpg",
                  title: "Nursing Manament",
                  author: "Melvin Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 3,
                    comments: [{}]
                  },
                  rating: 2,
                  summary: ""
                }
              ]
            },
            {
              headerTitle: {
                top: "Just Arrived",
                min: "These books have been uploaded today",
                type: "books"
              },
              cardItems: [
                {
                  type: "book",
                  img:
                    "https://res.cloudinary.com/chawanangwa/image/upload/v1571132071/largepreview_r7oj6c.png",
                  title: "Computer and Cyber security",
                  author: "Melvin Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 1000,
                    comments: [{}]
                  },
                  rating: 5,
                  summary: ""
                },
                {
                  type: "book",
                  img:
                    "https://res.cloudinary.com/chawanangwa/image/upload/v1571132071/largepreview_r7oj6c.png",
                  title: "World Whisper",
                  author: "Mulenga Chipimo",
                  price: null,
                  about:"",
                  reviews: {
                    num: 3,
                    comments: [{}]
                  },
                  rating: 3,
                  summary: ""
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    const { type } = this.props;
    const { data } = this.state;

    const { classes } = this.props;

    if (type === "top-banner") {
      return (
        <div>
          <TopBanner />
        </div>
      );
    } else if (type === "card") {
      return data.map(value => (
        <div style={{ marginTop: 10, paddingBottom: 25, width: "100%" }}>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", color: "#a3a3a3" }}>
              <h6 style={{ color: "grey" }}>{value.type}</h6>
              <div
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "#a3a3a3",
                  marginTop: 10,
                  marginLeft: 8
                }}
              />
            </div>

            {value.cards.map(cardsData => (
              <div>
                <div>
                  <Typography variant="h6" style={{ color: "green" }}>
                    {cardsData.headerTitle.top}
                  </Typography>
                </div>

                <div style={{ marginTop: -10, marginBottom: 15 }}>
                  {cardsData.headerTitle.min}
                </div>

                <div style={{ width: "100%" }}>
                  <FuseAnimateGroup
                    enter={{
                      animation: "transition.slideUpBigIn"
                    }}
                    className={classes.animation}
                    duration={2000}
                  >
                    {cardsData.cardItems.map(card => (
                      <div>
                        <CardView data={card} />
                      </div>
                    ))}
                  </FuseAnimateGroup>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      return <div />;
    }
  }
}

export default withStyles(styles)(Cards);
