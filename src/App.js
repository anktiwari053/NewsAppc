import React, { Component } from 'react';
import Navbar from './camponet/Navbar';
import News from './camponet/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './camponet/Loading';

export default class App extends Component {
  render() {

    const bodystyle = {
      backgroundColor: '#f38c8cff',
      color: '#f5f5f5',
      fontFamily: 'Verdana',
      padding: '20px',
      margin: '0'
    }

   

    return (
      <Router>
        <div style={bodystyle}>

          <Loading/>
     
          
          <Navbar />
                    
          <Routes>
           <Route path="/Home" element= {<News  key="general" pageSize={8} country="in" category="general" />} />
             <Route path="/Home" element={<News setProgress={this.setProgressa} key="general" pageSize={8} country="in" category="general" />} />
            <Route path="/general" element={<News setProgress={this.setProgressa} key="general" pageSize={8} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgressa} key="business"pageSize={8} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgressa} key="entertainment" pageSize={8} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgressa}  key="general" pageSize={8} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgressa}  key="health" pageSize={8} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgressa}  key="science"pageSize={8} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgressa}  key="sports"pageSize={8} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgressa}  key="technology"pageSize={8} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
