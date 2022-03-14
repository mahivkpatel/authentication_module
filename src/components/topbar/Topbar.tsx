import React, { Fragment, useState } from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Sidebr from "../sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Notify from "@material-ui/icons/Notifications";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  }
}));


const Topbar = (drawerWidth:any) => {
  const classes = useStyles(drawerWidth);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            className={clsx(
              classes.menuButton
              //open || classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" className={classes.title}>
            Dashboard
          </Typography>
            <Grid item xs />
            <Grid item>
              <Typography >Welcome User!</Typography>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <Notify />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Avatar src="./Images/profile_image.png" />
              </IconButton>
            </Grid>
         
  
        </Toolbar>
      </AppBar>
      <Sidebr open={open} />
    </Fragment>
  );
};

export default Topbar;
