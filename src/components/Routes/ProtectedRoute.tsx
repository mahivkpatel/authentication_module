import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
	

	const useAuth=()=>{
	  const user=localStorage.getItem('isAuth')
	  if(user){
	    return true
	  } else {
	    return false
	  }
	}
	const  ProtectedRoutes=(props:any) =>{
	debugger

	  const auth=useAuth()
	

	  return auth?<Outlet/>: <Navigate to="/login"/>
	}
	

	export default ProtectedRoutes;;
