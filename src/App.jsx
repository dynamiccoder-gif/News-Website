import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Navbar/> ,
  children:[
    
  {path:"/",
   element:<Home />},
   {path:"Business",
   element:<Home  key="Business" country="in" category="Business"/>},
   {path:"Entertainment",
   element:<Home  key="Entertainment" country="in" category="Entertainment"/>},
   {path:"Technology",
   element:<Home  key="Technology" country="in" category="Technology"/>},
   {path:"Sports",
   element:<Home   key="Sports" country="in" category="Sports"/>},
   {path:"Science",
   element:<Home  key="Scaince" country="in" category="Science"/>},
   {path:"Health",
   element:<Home  key="Health" country="in" category="Health"/>}
  ]
}
   
]);

export default class App extends Component {
 
  render() {
    return (
      <div className='app1'>
   
      <RouterProvider router={router} />
      </div>
    )
  }
}
