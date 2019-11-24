import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
});

const CardView = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => {
           props.dispatchEvent({type:"CARDITEMS", payload: props.data})
          history.push("/itemViewer");
        }}
      >
        <CardMedia
          className={classes.media}
          image={props.data.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ width: 157, overflow: "hidden" }}>
            <Typography variant="overline" display="block" noWrap>
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              by {props.data.author}
            </Typography>
            <Typography variant="body2" style={{ color: "red" }} component="p">
              {props.data.price != null ? "K " + props.data.price : "free"}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);


