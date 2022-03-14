import React from "react";

import {
  Dashboard as DashboardIcon,
  ExpandLess,
  ExpandMore,
  AddCircle as AddCircleIcon,
  InsertDriveFile as InsertDriveFileIcon

} from "@material-ui/icons";

const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
    iconClosed: <ExpandLess />,
    iconOpened: <ExpandMore />
  },
  {
    title: "Users",
    path: "/",
    icon: <DashboardIcon />,
    iconClosed: <ExpandLess />,
    iconOpened: <ExpandMore />
  },
  {
    title: "API Docs",
    icon: <InsertDriveFileIcon />,
    iconClosed: <ExpandLess />,
    iconOpened: <ExpandMore />,
    subNav: [
      {
        title: "Create",
        icon: <AddCircleIcon />,
        path: "/create-project"
      }
    ]
  }
];

export default SidebarData;
