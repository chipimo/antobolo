import React, {forwardRef, useImperativeHandle} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import Avatar from '@material-ui/core/Avatar';
import { Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  navbarContent: {
    flex: "1 1 auto"
  },

});

 const LeftSideDrawer = forwardRef((props, ref) => {
  const classes = useStyles();
  const history = useHistory();
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  useImperativeHandle(ref, () => ({

  toggleDrawerProps (side, open) {
    
    setState({ ...state, [side]: open });
  }

  }));

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        <div style={{height:200, overflow:"hidden"}}>
             <div>
                 <p>Antobolo Explorer </p>
             </div>
             
             <div style={{width:"100%", height:"70%"}}>
                 <div style={{margin: "auto",
  width: "50%",}}>
                     <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/chawanangwa/image/upload/v1560520651/profile/2325312890863699.jpg" className={classes.bigAvatar} />
                     <div>
                        User name here
                     </div>
                     
                  </div>
             </div>
             
         </div>
        </ListSubheader>
      }
      className={classes.root}
    >
    <Divider />
    <div style={{height:5}}/>
      <ListItem 
           button   
           selected={selectedIndex === 0}
           onClick={(event) => {
               handleListItemClick(event, 0)
               history.push("/")
          }}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Explore" />
      </ListItem>
      
      <ListItem 
           button
           selected={selectedIndex === 1}
           onClick={(event) => {
               handleListItemClick(event, 1)
               history.push("/books")
          }}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Books" />
      </ListItem>
      
      <ListItem 
           button
           selected={selectedIndex === 2}
           onClick={(event) => {
               handleListItemClick(event, 2)
               history.push("/assignment")
          }}>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Assignments" />
      </ListItem>
      
      <ListItem 
           button
           selected={selectedIndex === 3}
           onClick={(event) => {
               handleListItemClick(event, 3)
               history.push("/pastpapers")
          }}>
        <ListItemIcon>
          <DescriptionIcon/>
        </ListItemIcon>
        <ListItemText primary="PastPapers" />
      </ListItem>
      
      <div style={{height:4}} />
      <Divider />
      <div style={{height:4}} />
      
       <ListItem 
           button
           selected={selectedIndex === 4}
           onClick={(event) => {
               handleListItemClick(event, 4)
               history.push("/blog")
          }}>
        <ListItemIcon>
          <ListAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
       
      <ListItem 
           button
           selected={selectedIndex === 5}
           onClick={(event) => {
               handleListItemClick(event, 5)
               history.push("/about")
          }}>
        <ListItemIcon>
          <InfoIcon/>
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
      
      <ListItem 
           button
           selected={selectedIndex === 6}
           onClick={(event) => {
               handleListItemClick(event, 6)
               history.push("/help")
          }}>
        <ListItemIcon>
          <HelpOutlineIcon/>
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
      
      <ListItem 
           button
           selected={selectedIndex === 7}
           onClick={(event) => {
               handleListItemClick(event, 7)
               history.push("/settings")
          }}>
        <ListItemIcon>
          <SettingsIcon/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      
    </List>
    </div>
  );

  return (
    <div>
      
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList("left") }
      </Drawer>
    </div>
  );
})

export default LeftSideDrawer;
