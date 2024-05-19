import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='app1'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Business' element={<Home country='in' category='Business' />} />
            <Route path='/Entertainment' element={<Home country='in' category='Entertainment' />} />
            <Route path='/Technology' element={<Home country='in' category='Technology' />} />
            <Route path='/Sports' element={<Home country='in' category='Sports' />} />
            <Route path='/Science' element={<Home country='in' category='Science' />} />
            <Route path='/Health' element={<Home country='in' category='Health' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
