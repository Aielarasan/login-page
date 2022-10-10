import React from 'react';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './Component/Header/Header'
import Login from './Component/Content/Content'
import Footer from './Component/Footer/Footer'

import './App.css'

class App extends React.Component {
    render(){
      return(
      <div>
        <Header/>
        <Login/>
        
        
        
      </div>
    );
    }
  }


export default App;