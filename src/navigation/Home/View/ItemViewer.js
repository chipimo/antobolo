import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { makeStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";
import CardView from "../../../components/Cards/CardView";
import { connect } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "green"
  }
}));

const ItemViewer = props => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (props.CardItem.isLoaded === false) {
      history.push("/");
    }
  }, [pathname]);

  return (
    <ScrollToTop>
      <div
        style={{
          paddingTop: 70,
          paddingBottom: 50,
          width: "100%",
          backgroundColor: "#e7e7e7",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <Paper
          style={{
            paddingBottom: 20,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 20
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>
              <div style={{ width: 150, height: 220, overflow: "hidden" }}>
                <img style={{ width: "100%" }} src={props.CardItem.data.img} />
              </div>
              <div style={{ marginTop: 10 }}>
                <StarRatings
                  rating={props.CardItem.data.rating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                  starDimension="19px"
                  starSpacing="5px"
                />
              </div>
              <Typography
                style={{ color: "green" }}
                variant="subtitle"
                display="block"
              >
                {props.CardItem.data.reviews.num} Reviews
              </Typography>
            </div>
            <div style={{ paddingLeft: 15, width: "60%" }}>
              <Typography
                style={{ color: "green" }}
                variant="button"
                display="block"
              >
                Title : {props.CardItem.data.title}
              </Typography>

              <div style={{ marginTop: 10 }}>
                <Typography
                  style={{ color: "#3b3b3b" }}
                  variant="subtitle"
                  display="block"
                >
                  Author : {props.CardItem.data.author}
                </Typography>
              </div>

              <div style={{ marginTop: 5 }}>
                <Typography
                  style={{ color: "#3b3b3b" }}
                  variant="subtitle"
                  display="block"
                >
                  Type : PDF file
                </Typography>
              </div>
              <div style={{ marginTop: 5 }}>
                <Typography
                  style={{ color: "#3b3b3b" }}
                  variant="subtitle"
                  display="block"
                >
                  Size : 20 mb
                </Typography>
              </div>

              <div style={{ marginTop: 5, display: "flex" }}>
                <div>Price :</div>
                <Typography
                  style={{ color: "red", paddingLeft: 10, marginTop: -1 }}
                  variant="button"
                  display="block"
                >
                  free
                </Typography>
              </div>

              <div style={{ marginTop: 25 }}>
                <Grid item xs={12} md={6}>
                  <ButtonGroup
                    fullWidth
                    aria-label="full width outlined button group"
                  >
                    <Button>Preview</Button>
                    <Button>Download</Button>
                  </ButtonGroup>
                </Grid>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#e7e7e7",
              height: 1,
              width: "100%",
              marginTop: 20
            }}
          />

          <div style={{ marginTop: 10 }}>
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Book summary{" "}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <div style={{ paddingTop: 10 }}></div>
          </div>
        </Paper>

        <Paper style={{ marginTop: 10, padding: 20 }}>
          <div style={{ marginTop: 5 }}>
            <Typography
              style={{ color: "green" }}
              variant="button"
              display="block"
            >
              You may also enjoy
            </Typography>
          </div>

          <div
            style={{
              height: 350,
              display: "flex",
              overflowY: "auto",
              padding: 10
            }}
          >
            <div style={{ width: 150, marginLeft: 20 }}>
              <CardView data={[]} />
            </div>

            <div style={{ width: 150, marginLeft: 20 }}>
              <CardView data={[]} />
            </div>

            <div style={{ width: 150, marginLeft: 20 }}>
              <CardView data={[]} />
            </div>
          </div>
        </Paper>

        <Paper style={{ marginTop: 10, padding: 20 }}>
          <div style={{ marginTop: 5 }}>
            <Typography
              style={{ color: "green" }}
              variant="button"
              display="block"
            >
              Reviews
            </Typography>
          </div>
        </Paper>
      </div>
    </ScrollToTop>
  );
};

function mapStateToProps(state) {
  return {
    CardItem: state.CardItem
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemViewer);
