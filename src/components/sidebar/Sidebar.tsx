// import React,{useContext} from "react";
// import { NavLink } from 'react-router-dom'
// import ToggleSidebarContext from "../../context/toggleSidebar";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   makeStyles,
//   Drawer,
// } from "@material-ui/core";
// import {
//   Home,
//   MailOutlineTwoTone
// } from "@material-ui/icons";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import PersonIcon from '@mui/icons-material/Person';
// import Users from "../User/User.component";
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import { HomeMax, LogoutOutlined } from "@mui/icons-material";



// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   //background: `linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))`,
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(8),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9)
//     }
//   },
//   toolbar: {
//     width: drawerWidth,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   link:{
//     background: `linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))`
//   }
// }));

// function Sidebar() {
//   const { Toggle } = useContext(ToggleSidebarContext);
//   const classes = useStyles();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Drawer
//     className={ classes.drawer } 
//     variant="permanent"
//     open={Toggle}
//     onClose={handleDrawerToggle}
//    >
//      {Toggle  && (
//        <div> <div className={classes.toolbar} />
//        <List >
//        {listItems.map((listItem, index) => (
//           <NavLink to={`/${listItem.path}`}key={index}  >
//           <ListItem  button >
//              <ListItemIcon>  {listItem.NavIcon}
//                  </ListItemIcon><ListItemText primary={listItem.name} />
//               </ListItem>
//               </NavLink>
//          ))}
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//                <ListItem button key={text}>
//                  <ListItemIcon>
//                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                  </ListItemIcon>
//                  <ListItemText primary={text} />
//                </ListItem>
//              ))}
//        </List>
//        <Divider />  </div>
//      ) }
         
//    </Drawer>
//   );
// }

// export default Sidebar



import React, { Fragment } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from '@mui/icons-material/Person';
import { NavLink,useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import {
  People as PeopleIcon,
  //ChevronLeft as ChevronLeftIcon,
  Assignment as AssignmentIcon,
 
} from "@material-ui/icons";

import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7)
    }
  }
}));

const listItems:any[] = [
  {
    path          : "",
    name          : "Dashboard",
    showMenu      : true,
    NavIcon          : <DashboardIcon/>
  },
  {
    path          : "analytics",
    name          : "Analytics",
    showMenu      : true,
    NavIcon          : <AnalyticsIcon/>
  },
  {
    path          : "user",
    name          : "User",
    showMenu      : true,
    NavIcon          : <PersonIcon/>
  },

];



const Sidebar = ({ open }:any) => {
  const classes = useStyles();
  const navigate = useNavigate();
const onLogout =() => {
  localStorage.removeItem('isAuth')
  navigate("/login")
}
  return (
    <Fragment>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} />
        <Divider />
        <List>
        {listItems.map((listItem, index) => (
          <NavLink to={`/${listItem.path}`}key={index}  >
          <ListItem  button >
             <ListItemIcon>  {listItem.NavIcon}
                 </ListItemIcon><ListItemText primary={listItem.name} />
              </ListItem>
              </NavLink>
         ))}
          {["All mail", "Trash", "Spam"].map((text, index) => (
               <ListItem button key={text}>
                 <ListItemIcon>
                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItem>
             ))}
      
       
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Mitglieder" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="ToDo" />
          </ListItem>
          <ListItem button onClick={onLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
