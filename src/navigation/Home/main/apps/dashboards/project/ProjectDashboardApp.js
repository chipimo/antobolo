import React, { useEffect, useRef, useState } from "react";
import {
  Hidden,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Checkbox,
  Button
} from "@material-ui/core";
import { FuseAnimateGroup, FusePageSimple } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import _ from "lodash";
import clsx from "clsx";
import Widget8 from "./widgets/Widget8";
import Widget9 from "./widgets/Widget9";
import Widget10 from "./widgets/Widget10";
import Widget11 from "./widgets/Widget11";
import { makeStyles } from "@material-ui/styles";
import TimelineTab from "./tabs/TimelineTab";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  content: {
    "& canvas": {
      maxHeight: "100%"
    }
  },
  selectedProject: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "8px 0 0 0"
  },
  projectMenuButton: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "0 8px 0 0",
    marginLeft: 1
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

function ProjectDashboardApp(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const dispatch = useDispatch();
  const widgets = useSelector(
    ({ projectDashboardApp }) => projectDashboardApp.widgets
  );
  const projects = useSelector(
    ({ projectDashboardApp }) => projectDashboardApp.projects
  );

  const classes = useStyles(props);
  const pageLayout = useRef(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    menuEl: null
  });

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    dispatch(Actions.getWidgets());
    dispatch(Actions.getProjects());
  }, [dispatch]);

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleChangeProject(id) {
    setSelectedProject({
      id,
      menuEl: null
    });
  }

  function handleOpenProjectMenu(event) {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: event.currentTarget
    });
  }

  function handleCloseProjectMenu() {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: null
    });
  }

  if (!widgets || !projects) {
    return null;
  }

  return (
    <FusePageSimple
      classes={{
        header: "min-h-160 h-160",
        toolbar: "min-h-48 h-48",
        rightSidebar: "w-288",
        content: classes.content
      }}
      header={
        <div className="flex flex-col justify-between flex-1 px-24 pt-24">
          <div className="flex justify-between items-start">
            <Typography className="py-0 sm:py-24" variant="h4">
              Welcome back, Melvin!
            </Typography>
            <Hidden lgUp>
              <IconButton
                onClick={ev => pageLayout.current.toggleRightSidebar()}
                aria-label="open left sidebar"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </div>
          <div className="flex items-end">
            <div className="flex items-center">
              <div
                className={clsx(
                  classes.selectedProject,
                  "flex items-center h-40 px-16 text-16"
                )}
              >
                {_.find(projects, ["id", selectedProject.id]).name}
              </div>
              <IconButton
                className={clsx(classes.projectMenuButton, "h-40 w-40 p-0")}
                aria-owns={selectedProject.menuEl ? "project-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClickOpen}
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Subjects list"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    A list of subjects the from selected school 
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                 
                  <Button onClick={handleClose} color="primary">
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="off"
          className="w-full border-b-1 px-24"
        >
          <Tab className="text-14 font-600 normal-case" label="Assignments" />
          <Tab className="text-14 font-600 normal-case" label="Books" />
          <Tab className="text-14 font-600 normal-case" label="Past Papers" />
        </Tabs>
      }
      content={
        <div className="p-12">
          {tabValue === 0 && <TimelineTab />}
          {tabValue === 1 && (
            <FuseAnimateGroup
              className="flex flex-wrap"
              enter={{
                animation: "transition.slideUpBigIn"
              }}
            >
              
            <div className="widget flex w-full p-12">Books</div>
            </FuseAnimateGroup>
          )}
          {tabValue === 2 && (
            <FuseAnimateGroup
              className="flex flex-wrap"
              enter={{
                animation: "transition.slideUpBigIn"
              }}
            >
              <div className="widget flex w-full p-12">
                Past Papers
              </div>
            </FuseAnimateGroup>
          )}
        </div>
      }
      rightSidebarContent={
        <FuseAnimateGroup
          className="w-full"
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <div style={{ position: "fixed", width: "22%" }}>
            <div
              style={{ backgroundColor: "#3A4050" }}
              className="widget w-full p-12"
            >
              <Typography variant="h6" style={{ color: "#fff" }}>
                Schools
              </Typography>
            </div>
            <div className="widget w-full p-12">
              <div className={classes.root}>
                {[
                  { items: 300, school: "School of Nursing" },
                  { items: 100, school: "School of Pharmacy" },
                  { items: 30, school: "School of Medicine" },
                  { items: 10, school: "School of Agriculture" }
                ].map(value => {
                  const labelId = `checkbox-list-label-${value}`;
                  return (
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem button>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={value.school}
                          secondary={
                            <React.Fragment>
                              {`— contains ${value.items} items`}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </List>
                  );
                })}
              </div>
            </div>
          </div>
        </FuseAnimateGroup>
      }
      ref={pageLayout}
    />
  );
}

export default withReducer("projectDashboardApp", reducer)(ProjectDashboardApp);
