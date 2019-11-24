import React from "react";
import { AppBar, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  avatar: {
    width: 72,
    height: 72,
    position: "absolute",
    top: 92,
    padding: 8,
    background: theme.palette.background.default,
    boxSizing: "content-box",
    left: "50%",
    transform: "translateX(-50%)",
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut
    }),
    "& > img": {
      borderRadius: "50%"
    }
  }
}));

function UserNavbarHeader(props) {
  

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      classes={{ root: classes.root }}
      className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0"
    >
      <Typography
        className="username text-16 whitespace-no-wrap"
        color="inherit"
      >
        Gust user
      </Typography>
      <Button
        variant="outlined"
        size="small"
        color="secondary"
        className={classes.margin}
      >
        Join Antobolo
      </Button>
      <Typography
        className="email text-13 mt-8 opacity-50 whitespace-no-wrap"
        color="inherit"
      ></Typography>
      <Avatar
        className={clsx(classes.avatar, "avatar")}
        alt="user photo"
        src={"https://res.cloudinary.com/chawanangwa/image/upload/v1560927138/profile/331387964442689.jpg"
        }
      />
    </AppBar>
  );
}

export default UserNavbarHeader;
