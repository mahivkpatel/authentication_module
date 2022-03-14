import React,{useState,Fragment} from 'react'
import { Outlet } from "react-router-dom"
import ToggleSidebarContext from './context/toggleSidebar';
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.component';
import Login from "./components/Login/Login.component";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoutes from './components/Routes/PublicRoute';
import { CssBaseline, makeStyles, Container } from "@material-ui/core";
import Topbar from './components/topbar/Topbar';
import SignUp from "./components/SignUp/signup.component";
import { Users } from './components/User/User.component';
import Analytics from './components/Analytics/Analytics.component';
import { AuthProvider } from "./context/AuthContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

function Layout () {
  const classes = useStyles();
  return (
    <Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <Topbar/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Outlet />
        </Container>
      </main>
    </div>
  </Fragment>
  )
}

export default function App() {
  const [Toggle, setToggle] = useState(false);

  debugger
  return (
   <ToggleSidebarContext.Provider value={{Toggle,setToggle}}>
     <AuthProvider>
    <BrowserRouter>
      <Routes>
			<Route path="/" element={<ProtectedRoute />}>
    <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route   path="/user"  element={<Users />} />
              <Route   path="/analytics"  element={<Analytics />} />
              </Route>
		</Route>
 	<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<SignUp/>} /> */}
		</Route>
    <Route path="signup" element={<PublicRoutes />}>
		<Route path="/signup" element={<SignUp/>} />
		</Route>	</Routes>
    </BrowserRouter>
    </AuthProvider>
    </ToggleSidebarContext.Provider>
  );
}
