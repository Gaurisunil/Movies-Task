import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
//import Footer from './Components/Footer/SimpleReactFooter'
import Routes from './Components/Routes/Routes'
//import SimpleReactFooter from './Components/Footer/SimpleReactFooter'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        
        <Routes />
      </div>
    )
  }
}
