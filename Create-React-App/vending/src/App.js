import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import Chips from './Chips'
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Sardines from './Sardines'
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/sardines' element={<Sardines />} />
        </Routes>
      </div>
    );
  }
}

export default App;